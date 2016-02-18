var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pet = mongoose.model('Pet');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user:',user._id);
		//return the unique id for the user
		return done(null, user._id);
	});

	//Desieralize user will call with the unique id provided by serializeuser
	passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
      if(err){
        return done(err, false);
      }
      if(!user){
        return done('user not found', false);
      }
      // user found
      return done(user, true);
    });
	});

	passport.use('login', new LocalStrategy({
			passReqToCallback : true
		},
		function(req, username, password, done) {
      User.findOne({username: username}, function(err, user){
        if(err){
          return done(err, false);
        }
        // if there isn't a user with that username
        if(!user){
          return done('user ' + username + ' now found!', false);
        }
        if(!isValidPassword(user, password)){
          // wrong password
          return done('incorrect password', false);
        }
        // user successfully signed in
        return done(null, user);
      });
			if(!users[username]){
				console.log('User Not Found with username '+username);
				return done(null, false);
			}
		}
	));

	passport.use('signup', new LocalStrategy({
			passReqToCallback : true // allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) {
      User.findOne({username: username}, function(err, user){
        if(err){
          return done('db error ' + err, false);
        }
        if(user){
          // user is already signed up
          return done('username is already taken ', false);
        } else {
          //store user in memory
          var newUser = new User();

          newUser.username = username;
          newUser.password = createHash(password);

          newUser.save(function(err, user){
            if(err){
              return done(err, false);
            }
          console.log('successfully signed up user ' + newUser.username);
          return done(null, newUser);
        });
      }
    });
  }));

	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	};
	// Generates hash using bCrypt
	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};

};

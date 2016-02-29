var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  created_at: {type: Date, default: Date.now}
});

var petSchema = new mongoose.Schema({
  created_by: { type: String, ref: 'User' },
  name: String,
  created_at: {type: Date, default: Date.now}
},{
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },

  toObject: {
    virtuals: true
  }
});

// declare userSchema model
var User = mongoose.model("User", userSchema);

// declare petSchema model
mongoose.model("Pet", petSchema);

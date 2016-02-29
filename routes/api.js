// pull in express and expose the router
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');


function isAuthenticated(req, res, next){
  if(req.method === "GET"){
    return next();
  }
  if(req.isAuthenticated()){
    return next();
  }
  // if you're not authenticated you're redirected to the login page
  return res.redirect('/#login');
}

router.use('/pets', isAuthenticated);
//api for all pets
router.route('/pets')
  //create a new pet
  .post(function(req, res){
    var pet = new Pet();
    pet.name = req.body.name;
    pet.created_by = req.user.username;
    pet.save(function(err, pet){
      console.log(err);
      if(err){
        return res.send(500,err);
      }
      return res.json(pet);
    });
  })
  //get all the pets in the database
  .get(function(req, res){
    Pet.find(function(err, pets){
      if(err){
        return res.send(500, err);
      }
      return res.send(pets);
    });

  });
//api for a specfic pet
router.route('/pets/:id')
//get existing pet
.get(function(req,res, next){
  Pet.findById(req.params.id, function(err, pet){
    if(err)
      return next(err);
    res.json(pet);
  });
})
  //update existing pet
  .put(function(req,res, next){
    Pet.findById(req.params.id, function(err, pet){
      // return error if pet doesn't exist
      if(err)
        res.send(err);
      // pet.created_by = req.body.created_by;
      // pet.name = req.body.name;
      res.json(pet);

      pet.save(function(err, pet){
        if(err)
          res.send(err);
        res.json(pet);
      });
    });
  })

  //delete existing pet
  .delete(function(req,res){
    Pet.remove({
      _id: req.params.id
    }, function(err){
      if (err)
        res.send(err);
      res.json('deleted');
    });
  });

module.exports = router;

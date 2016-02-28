// pull in express and expose the router
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');


router.use(function(req, res, next){
  if(req.method === "GET"){
    // you have to be authenticated user to make or delete pet
    return next();
  }
  if(!req.isAuthenticated()){
    // if you're not authenticated you're redirected to the login page
    res.redirect('/#login');
  }
  // user authenticated
  return next();
});
//api for all pets
router.route('/pets')
  //create a new pet
  .post(function(req, res){
    var pet = new Pet();
    pet.name = req.body.name;
    pet.created_by = req.body.created_by;
    pet.save(function(err, data){
      if(err){
        return res.send(500,err);
      }
      return res.send(pet);
    });
  })
  //get all the pets in the database
  .get(function(req, res){
    Pet.find(function(err, data){
      if(err){
        return res.send(500, err);
      }
      return res.send(data);
    });

  });
//api for a specfic pet
router.route('/pets/:id')
  //update existing pet
  .put(function(req,res){
    Pet.findById(req.params.id, function(err, pet){
      // return error if pet doesn't exist
      if(err)
        res.send(err);
      pet.created_by = req.body.created_by;
      pet.name = req.body.name;

      pet.save(function(err, pet){
        if(err)
          res.send(err);
        res.json(post);
      });
    });
  })
  //get existing pet
  .get(function(req,res){
    Pet.findById(req.params.id, function(err, pet){
      if(err)
        res.send(err);
      res.json(post);
    });
  })
  //delete existing pet
  .delete(function(req,res){
    Pet.remove({
      _id: req.params.id
    }, function(err){
      res.send(err);
      res.json('deleted');
    });
  });

module.exports = router;

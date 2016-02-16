// pull in express and expose the router
var express = require('express');
var router = express.Router();

//api for all posts
router.route('/pets')
  //create a new pet
  .post(function(req, res){
    //create a new pet in the database
    res.send({message:"TODO create a new pet in the database"});
  })
  .get(function(req, res){
    //get all the pets in the database
    res.send({message:"TODO get all the pets in the database"});
  });
//api for a specfic pet
router.route('/pets/:id')
  //create
  .put(function(req,res){
      return res.send({message:'TODO modify an existing pet by using param ' + req.param.id});
  })
  .get(function(req,res){
      return res.send({message:'TODO get an existing pet by using param ' + req.param.id});
  })
  .delete(function(req,res){
      return res.send({message:'TODO delete an existing pet by using param ' + req.param.id});
  });

module.exports = router;

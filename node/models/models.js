var mongoose = require('mongoose');
// create schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  created_at: {type: Date, default: Date.now}
});

var petSchema = new mongoose.Schema({
  username: String,
  name: String,
  created_at: {type: Date, default: Date.now}
});

// declare userSchema model
mongoose.model("User", userSchema);

// declare petSchema model
mongoose.model("Pet", petSchema);

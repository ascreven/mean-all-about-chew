var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  created_at: {type: Date, default: Date.now}
});

var petSchema = new mongoose.Schema({
  created_by: { type: Schema.ObjectId, ref: 'User' },
  name: String,
  created_at: {type: Date, default: Date.now}
});

// declare userSchema model
var User = mongoose.model("User", userSchema);

// declare petSchema model
mongoose.model("Pet", petSchema);

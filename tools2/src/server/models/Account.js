var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var AccountSchema = new mongoose.Schema({
  Username: String,
  Password: String
})

AccountSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("Account", AccountSchema, 'accounts');
//model here

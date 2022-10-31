const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
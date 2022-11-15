const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    }
})
UserSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User",UserSchema);

module.exports = User; 
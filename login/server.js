const dotenv = require('dotenv').config()
const express = require("express");
const UserModel = require("./models/User");
// const expressLayouts = require("express-ejs-layouts");
const bcrypt = require("bcrypt");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./passport-configure");
initializePassport(passport, 
  currUser => {  
    return UserModel.exists({username: currUser});
})
let curUserName;
let hashedPass;


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://harry6drain:plantyourdreams@cluster0.9l6lwo5.mongodb.net/userDB");


app.use(express.urlencoded({extended:false}));
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false

}))
app.use(passport.initialize());
app.use(passport.session());  


//EJS
app.set("view engine","ejs");
app.get("/",(req,res) => {
    res.render("index.ejs", {name: "Harry"});
})


//login route
app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
app.post("/login",passport.authenticate('local',{
  successRedirect: "/",
  failureRedirect: '/login',
  failureFlash: true
}))

//register route
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
app.post("/register",async (req,res)=>{
    try{
        hashedPass = await bcrypt.hash(req.body.password,10);
    }
    catch{
        res.redirect("/register")
    }
    const newUser = new UserModel({
        username: req.body.username,
        password: hashedPass
    })
    newUser.save();
    res.redirect("/login");
})


// const register = (username, password, errorCallback, successCallback) => {
//   // TODO: implement register
//   let message = '';
//   if (username.length < 8) {
//     message = 'USERNAME PASSWORD TOO SHORT';
//     console.log(message);
//     errorCallback({ message });
//   } else {
//     User.findOne({ username }, (err, res) => {
//       if (res) {
//         message = 'USERNAME ALREADY EXISTS';
//         console.log(message);
//         errorCallback({ message });
//       } else {
//         // you can use a default value of 10 for salt rounds
//         bcrypt.hash(password, 10, function (err, hash) {
//           // do more stuff here!
//           let user = new User({
//             username: username,
//             password: hash,
//           });
//           user.save((err => {
//             if (err) {
//               message = 'DOCUMENT SAVE ERROR';
//               console.log(message);
//               errorCallback({ message });
//             } else {
//               successCallback(user);
//             }
//           }));
//         });
//       }
//     });
//   }
// };



// In webapp.mjs(for server.mjs) 
// import * as auth from './auth.mjs'


// export {
//   startAuthenticatedSession,
//   endAuthenticatedSession,
//   register,
//   login,
//   authRequired
// };

app.listen(3000);


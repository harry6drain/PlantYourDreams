var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    flash = require("connect-flash");

mongoose.connect("mongodb+srv://harry6drain:plantyourdreams@cluster0.9l6lwo5.mongodb.net/userDB");
const app = express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret:"Miss white is my cat",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());
// ROUTES
app.get("/",function(req,res){
    res.render("index.ejs",{name: "Harry"});
})

app.get("/login",function(req,res){
    res.render("login",{flash: req.flash('Login failed :(')});
})
app.post("/login", passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res) {
    res.redirect('/');
});

app.get("/register",function(req,res){
    res.render("register");
})
app.post("/register", function (req, res, next) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log("Error while registering user!",err);
            return next(err);
        }
        console.log("User registered successfully!");
        res.redirect("/login");
    });
});

// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/login");
// }


app.listen(3000,function(err){
    if (err){
        console.log("Server error!")
    }
    else{
        console.log("Server is up at 3000.");
    }
});



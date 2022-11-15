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
app.use(express.json());
app.use(require("express-session")({
    secret:"I'm going to Orlando this thanksgiving",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }))

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());
// ROUTES
app.get("/",isLoggedIn,function(req,res){
    console.log(req.body)
    res.render("index",{name: req.body.username});
})

app.get("/login",function(req,res){
    console.log(req.body)
    res.render("login",{flash: req.flash('Login failed :(')});
})
app.post("/login", passport.authenticate('local', {successRedirect: "/", failureRedirect: '/login', failureFlash: true }));

app.get("/register",function(req,res){
    res.render("register");
})
app.post("/register", function (req, res, next) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log("Error while registering user!",err);
            return next(err);
        }
        else{
            passport.authenticate('local')(req, res, function() {
                res.redirect('/login');
            });
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}




app.listen(3000,function(err){
    if (err){
        console.log("Server error!")
    }
    else{
        console.log("Server is up at 3000.");
    }
});



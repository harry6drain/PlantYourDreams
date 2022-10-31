const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport,getUser){
    const authenticateUser = async (username, password, done) => {
        const user = getUser(username)
        if (user == null){
            return done(null,false,{message: "No user found!"});
        }  
        try{
            if (await bcrypt.compare(password,user.password)){
                return done(null,user)
            }
            else{
                return done(null,false,{message: "Password Incorrect!"});
            }
        }
        catch(e){
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'username'},authenticateUser));
    passport.serializeUser((user,done) => {

    })
    passport.deserializeUser((id,done) => {
        
    })
}

module.exports = initialize;
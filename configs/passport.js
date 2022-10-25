const {User} = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    function(email, password, done) {
      User.findOne({ 
        email: email
        }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password!=password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      if(err){
        console.log('error in finding user --> passport deserialzer');
        return done(err);
    }
      return done(null, user);
    });
  });

  passport.setAuthenticatedUser = async function(req,res,next){
    if(req.isAuthenticated()){
      res.locals.user = req.user;
    }
    next();
}
passport.autherizedAdmin=function(req,res,next){
  if(req.isAuthenticated()&& res.locals.user.userType==="admin"){
    next();
  }
  else {
    console.log("you are not autherised admin.");
    return res.end("you are not autherized admin")
  }
}
passport.autherizedUser=function(req,res,next){
  if(req.isAuthenticated()){
    next();
  }
  else{
    console.log("you are not autherized");
    return res.redirect('/')
  }
}
module.exports = passport;
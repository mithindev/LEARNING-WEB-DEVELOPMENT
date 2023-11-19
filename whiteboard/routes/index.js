var express = require('express');
var router = express.Router();

const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure the Local Strategy
passport.use(new LocalStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/feed', function(req, res, next) {
  res.render('feed');
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.send("profile");
});

router.post('/register', function(req, res) {
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullname });

  userModel.register(userData, req.body.password)
    .then(() => {
      passport.authenticate('local')(req, res, function(){
        res.redirect('/profile');
      });
    })
    .catch(err => {
      console.error(err);
      res.render('error'); // Render an error page
    });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/'
}), function(req, res) {});

router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) {
      // handle error
      return next(err);
    }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}

module.exports = router;

var express = require('express');
var router = express.Router();
const userModel = require('./users');
const localStrategy = require('passport-local');
const passport = require('passport');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/profile');
      });
    });
});

router.get('/profile', isLoggedIn, function (req, res) {
  res.send("Welcome to my profile!");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}));

router.get('/logout', function (req, res) {
  req.logout(); // No callback needed here
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;

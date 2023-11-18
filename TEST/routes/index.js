var express = require('express');
var router = express.Router();
const userModel = require('./users');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res, next) {
  const user = await userModel.create({
    username: 'mithindev',
    name: 'Mithin Dev',
    age: 19
  })

  res.send(user);
});

router.get('/read', function(req, res, next) {
  res.render('index');
});

router.get('/update', function(req, res, next) {
  res.render('index');
});

router.get('/delete', function(req, res, next) {
  res.render('index');
});

module.exports = router;

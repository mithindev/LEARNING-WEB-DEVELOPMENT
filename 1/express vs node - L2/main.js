const express = require('express')
const app = express()

app.use(function(req, res, next) {
  
  
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
  res.send('Hello This is Profile! 😊')
})

app.listen(3000)
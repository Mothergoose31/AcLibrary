require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const User = require('./models/user');
const Article = require('./models/articles');
const Citation = require('./models/citations');


const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

const loginLimiter = new RateLimit({
  windowMs: 5*60*1000,
  max: 3,
  delayMs: 0,
  message: "Maximum login attempts exceeded!"
})
const signupLimiter = new RateLimit({
  windowMs: 60*60*1000,
  max: 3,
  delayMs: 0,
  message: "Maximum accounts created. Please try again later."
})



mongoose.connect('mongodb://localhost/acLibrary', {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to Mongo on ${db.host}:${db.port}`);
});
db.on('error', (err) => {
  console.log(`Database error:\n ${err}`);
});

//get all users
app.get('/users', (req,res) => {

  User.find({}, function(err,users){
      if (err) res.json(err)
      res.json(users)
  })
})
//get  a single user
app.get('/users/:id', (req,res) => {
  User.findById(req.params.id, function (err, user) {
    if (err) res.json(err)
    res.json(user)
  });
  
})

//make a new user
app.post('/users', (req,res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  }, function(err, user) {
      res.json(user)
  })
})

//create a new article
app.post('/users/:id/articles', (req,res) => {
  Article.create({
  id: req.body.id,
  pdfUrl: req.body.pdfUrl,
  note: req.body.note,
  tags: req.body.tags 

  }, function(err, article) {
      res.json(article)
  })
})



app.use('/auth', require('./routes/auth'));
app.use('/api', expressJWT({secret: process.env.JWT_SECRET}), require('./routes/api'));

app.listen(process.env.PORT, () => {
  console.log('🖲🖲🖲 server connected to port ' + process.env.PORT);
})
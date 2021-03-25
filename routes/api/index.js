const express = require('express');
const router = express.Router();
const api = require('./api/v0');
const config = require('../config');


router.use((req, res, next) => {
  res.locals = config
  next()
})


router.get('/', (req, res)=> {
  res.render('pages/index', {pageTitle: 'Home'})
})


router.get('/login', (req, res)=> {
  res.render('pages/login', {pageTitle: 'login'})
  
})


router.get('/register', (req, res)=> {
  res.render('pages/register', {pageTitle: 'register'})
})


router.use('/api/v0/', api);

module.exports = router;

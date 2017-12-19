var express = require('express');
var router = express.Router();

var passportGithub = require('../auth/github');


router.get('/', function(req, res, next) {
  console.log('session', req.session);
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
  passportGithub.authenticate('github', { 
    failureRedirect: '/login',
    successRedirect: '/'})
);

module.exports = router;

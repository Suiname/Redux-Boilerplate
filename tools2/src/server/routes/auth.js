import { Router } from 'express'
import passport from 'passport'

// Load models
import Account from '../models/Account'

const router = Router()

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
  return next();
  res.redirect('/users/login');
}

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    if (req.user.username == 'balaji'){
      res.json({username: "balaji"});
    } else {
      res.json(true);
    }
});

router.post('/logout', function(req, res){
  req.logout();
  res.json(true);
});

router.post('/check', function(req, res) {
  if (req.isAuthenticated()) {
    res.json(true);
  } else {
    res.json(false)
  }
});

router.post('/registerUser', function(req, res) {
  var info = req.body;
  Account.register(new Account({
    username: info.username,
    password: info.password
  }),
  info.password,
  function(err, account){
    if(err) {
      return console.log('error', err);
    }
    console.log('Account made', account);
    passport.authenticate('local')(req, res, function() {
    res.json(true);
    });
  });
});


router.post('/Register',
  function(req, res) {
      res.json(true);
});


router.get('/register/:username/:password', function(req, res){
  Account.register(new Account({
    username: req.params.username,
    password: req.params.password
  }),
  req.params.password,
  function(err, account){
    if(err) {
      return console.log('error', err);
    }
    console.log('Account made', account);
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});
module.exports = router;

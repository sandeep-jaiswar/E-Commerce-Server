var express = require('express');
var router = express.Router();

const User = require('../models/UserModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource user');
});

router.post('/create', function(req, res, next) {
    User.create(req.body, (err,data)=>{
      if(err) return next(err);
      res.json(data);
    })
  });
  
  router.get('/fetchAll',function(req,res,next){
    User.find().then((users)=>{
      res.json(users);
    }).catch((err)=>next(err));
  })

module.exports = router;

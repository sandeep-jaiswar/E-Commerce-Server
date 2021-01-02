var express = require('express');
var router = express.Router();
var UserModel =require('../models/UserModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
  UserModel.create(req.body, (err,data)=>{
    if(err) next(err);
    res.json(data);
  })
});

router.get('/fetchAll',function(req,res,next){
  UserModel.find().then((users)=>{
    res.json(users);
  })
})

router.post('/fetchByEmail',async function(req,res,next){
  UserModel.aggregate([
    {$match:{"email":req.body.email}},
    {$project:{"_id":1,"email":1,"firstName":1,"lastName":1,"password":1}}
  ]).exec((err, users) => {
    if (err) next(err);
    res.json(users);
  })
})

module.exports = router;

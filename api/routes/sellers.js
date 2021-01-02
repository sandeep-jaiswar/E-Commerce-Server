var express = require('express');
var router = express.Router();
var ProductModel =require('../models/productModel')
var SellerModel= require('../models/sellerModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with seller resource');
});


router.post('/create', function(req, res, next) {
  SellerModel.create(req.body, (err,data)=>{
    if (err) next(err);
    res.json(data);
  })
});

router.post('/fetchByEmail',async function(req,res,next){
  SellerModel.aggregate([
    {$match:{"email":req.body.email}},
    {$project:{"_id":1,"email":1,"firstName":1,"lastName":1,"password":1}}
  ]).exec((err, users) => {
    if (err) next(err);
    res.json(users);
  })
})

router.post('/addProduct', function(req, res, next) {
  var pid=req.body.productId ;
  var sid=req.body.sellerId;
  SellerModel.findOne({ sellerId: sid }, function (err, doc){
    if(err) next(err);
    doc.productsList = [...doc.productsList,pid];
    doc.save();
  });
  ProductModel.findOne({ productId: pid }, function (err, doc){
    if(err) next(err);
    doc.sellersList = [...doc.sellersList,sid];
    doc.save();
    res.json(doc)
  });
});

router.get('/fetchAll',function(req,res,next){
  SellerModel.find().then((users)=>{
    res.json(users);
  }).catch((err)=>next(err));
})

module.exports = router;
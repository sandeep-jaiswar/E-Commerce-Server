var express = require('express');
var router = express.Router();

var SellerModel = require('../models/sellerModel');
var ProductModel=require('../models/productModel');


router.get('/', function(req, res, next) {
  res.send('seller is ready')
});
/* GET home page. */
router.post('/create', function(req, res, next) {
  SellerModel.create(req.body, (err,data)=>{
    if(err) return next(err);
    res.json(data);
  })
});

router.post('/addProduct', function(req, res, next) {
  var pid=req.body.productId ;
  var sid=req.body.sellerId;
  SellerModel.findOne({ sellerId: sid }, function (err, doc){
    doc.productsList = [...doc.productsList,pid];
    doc.save();
  });
  ProductModel.findOne({ productId: pid }, function (err, doc){
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

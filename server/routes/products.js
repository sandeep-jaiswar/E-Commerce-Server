var express = require('express');
var router = express.Router();

var SellerModel = require('../models/sellerModel');
var ProductModel=require('../models/productModel');

router.get('/', function(req, res, next) {
  res.send('Backend is up and running product')
});

/* GET home page. */
router.post('/create', function(req, res, next) {
  ProductModel.create(req.body, (err,data)=>{
    var pid=data.productId;
    data.sellersList.forEach(element => {
      console.log(element);
      SellerModel.findOne({ sellerId: element }, function (err, doc){
        doc.productsList = [...doc.productsList,pid];
        doc.save();
      });
    });
    if(err) return next(err);
    res.json(data);
  })
});

router.get('/fetchAll',function(req,res,next){
  ProductModel.find().then((products)=>{
    res.json(products);
  }).catch((err)=>next(err));
})


module.exports = router;

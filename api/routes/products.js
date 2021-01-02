var express = require('express');
var router = express.Router();
var ProductModel =require('../models/productModel')
var SellerModel= require('../models/sellerModel')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with product resource');
});

router.post('/create', function(req, res, next) {
  ProductModel.create(req.body, (err,data)=>{
    var pid=data.productId;
    data.sellersList.forEach(element => {
      console.log(element);
      SellerModel.findOne({ sellerId: element }, function (err, doc){
        if (err) next(err);
        doc.productsList = [...doc.productsList,pid];
        doc.save();
      });
    });
    if (err) next(err);
    res.json(data);
  })
});

router.get('/fetchAll',function(req,res,next){
  ProductModel.find().then((products)=>{
    res.json(products);
  }).catch((err)=>next(err));
})

module.exports = router;
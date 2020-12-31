var express = require('express');
var router = express.Router();
var userRouter = require('./users');
var sellerRouter =require('./sellers')
var productRouter = require('./products')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/seller',sellerRouter);

module.exports = router;

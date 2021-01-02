const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  productId: {
    type: Number,
    required: true
  },
  consumer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sellersList:[{
    type:Number
  }],
  price : {
    type : String,
    required:true
  },
  created_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Product', ProductSchema);

const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

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

autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, {
  model: "Product", // collection or table name in which you want to apply auto increment
  field: "productId", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model('Product', ProductSchema);

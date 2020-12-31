const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const SellerSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  sellerId: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: String,
  productsList: [{
    type: Number
  }],
  created_date: {type: Date, default: Date.now},
});

autoIncrement.initialize(mongoose.connection);
SellerSchema.plugin(autoIncrement.plugin, {
  model: "Seller", // collection or table name in which you want to apply auto increment
  field: "sellerId", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model('Seller', SellerSchema);

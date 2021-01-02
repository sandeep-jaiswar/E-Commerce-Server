const mongoose = require('mongoose');

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

module.exports = mongoose.model('Seller', SellerSchema);

const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const UserSchema = mongoose.Schema({
   
    email: {
        type:String,
        required: true,
        unique: true
    },
    firstName: {
        type:String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    password: String,
    userId:{
        type:Number,
        unique : true
    },
    created_date: {type: Date, default: Date.now},
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {
  model: "User", // collection or table name in which you want to apply auto increment
  field: "userId", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

module.exports =mongoose.model('User',UserSchema);

const mongoose = require('mongoose');

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
    password: {
        type:String,
        required: true,
    },
    created_date: {type: Date, default: Date.now},
});

module.exports =mongoose.model('User',UserSchema);

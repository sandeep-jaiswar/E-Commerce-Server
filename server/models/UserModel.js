const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        trim : true
    },
    name :{
        type : String
    }

});

const User =mongoose.model('User',UserSchema);

module.exports={
    User
}
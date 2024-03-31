const mongoose = require('mongoose');

const UserRegisterSchema=new mongoose.Schema({
    fname:String,
    mname:String,
    lname:String,
    mobile:Number,
    password:String,
    ConfirmPassword:String
})

const RegisterModal=mongoose.model("Registeration",UserRegisterSchema)
module.exports=RegisterModal
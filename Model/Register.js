const mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    mname: { type: String, required: true },
    lname: { type: String, required: true },
    mobile: { type: Number, required: true },
    password: { type: String, required: true },
    ConfirmPassword: { type: String, required: true },
    date: {
        type: Date, default: Date.now()
    }
});

const RegisterModel = mongoose.model("Registration", UserRegisterSchema);

module.exports = RegisterModel;

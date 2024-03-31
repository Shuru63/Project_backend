
require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

const RegisterModel = require("./Model/Register");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/Registration")



app.post('/register', async (req, res) => {
    try {
        const newUser = await RegisterModel.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

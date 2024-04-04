const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserRegister = require('../Model/Register');

router.post("/createuser", async (req, res) => {
    const { fname, mname, lname, mobile, password, ConfirmPassword } = req.body;
    if (!fname || !mname || !lname || !mobile || !password || !ConfirmPassword) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if (password !== ConfirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }
    try {
        await UserRegister.create({
            fname,
            mname,
            lname,
            mobile,
            password,
            ConfirmPassword
            
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

router.post('/loginuser',async (req,res)=>{
    let { mobile, password} = req.body;
  
    if ( !mobile || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try{
       let userData=await UserRegister.findOne({mobile})
       if(!userData){
        return res.status(400).json({errors:"try login with correct credentaial"});
       }
       const password = await bcrypt.compare(password, password);
       if (!password) {
           return res.status(400).json({ errors: "Try logging in with correct credentials" });
       }

       res.json({ success: true });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;

import User from "../../models/Users";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req,res) => {
    if(req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email});
        console.log(user);
        const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
        let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(user){
            if(req.body.email === user.email && req.body.password === decryptedPassword){
                var token = jwt.sign({email:user.email, id: user._id, totalProbSolved: user.totalProbSolved, monthProg: user.monthProg, sheetsSolved: user.sheetsSolved, quesLevel: user.quesLevel, amanDhattarwal: user.amanDhattarwal}, 'jwtsecret');
                res.status(200).json({success: true, token});
            }
            res.status(400).json({error: "Invalid Email or Password"});
        }
        else{
            res.status(400).json({error: "No user found"});
        }
    }else{
        res.status(400).json({error: "This method is not allowed"});
    }
}

export default connectDb(handler);
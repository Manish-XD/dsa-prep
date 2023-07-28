import User from "../../models/Users";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req,res) => {
    try {        
        if(req.method == 'POST'){
            let user = await User.findOne({"email": req.body.email});
            const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if(user){
                if(req.body.email === user.email && req.body.password === decryptedPassword){
                    var token = jwt.sign({id: user._id}, 'jwtsecret');
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
    } catch (error) {
        res.status(400).json({error: "User not found"});
    }
}

export default connectDb(handler);
import User from "../../models/Users";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req,res) => {
    if(req.method == 'POST'){
        const { email, name } = req.body;
        let u = new User({email, password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(), name});
        await u.save();
        res.status(200).json({success: true});
    }
    else{
        res.status(400).json({error: "This method is not allowed"});
    }
}

export default connectDb(handler);
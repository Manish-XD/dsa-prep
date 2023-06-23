import AmanDhattarwal from "../../models/AmanDhattarwal";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        const {title, Questions} = req.body;
            let p = new AmanDhattarwal({title, Questions}) 
            await p.save()
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);
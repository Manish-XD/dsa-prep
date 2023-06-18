import AmanDhattarwal from "../../models/AmanDhattarwal";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    let AmanDhattarwals = await AmanDhattarwal.find()
    res.status(200).json({AmanDhattarwals})
}

export default connectDb(handler);
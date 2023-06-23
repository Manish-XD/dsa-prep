import AmanDhattarwal from '../../../models/AmanDhattarwal';
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
        const { pid } = req.query
        let AmanDhattarwals = await AmanDhattarwal.findOne({ title: pid })
        res.status(200).json({ AmanDhattarwals })
}

export default connectDb(handler);
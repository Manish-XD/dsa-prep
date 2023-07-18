import AmanDhattarwal from "../../models/AmanDhattarwals";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    const { userId } = req.body;
    if (req.method == 'POST') {
        try {
            const data = await AmanDhattarwal.findOne({ user: userId });
            if (!data) {
              return res.status(404).json({ error: 'User DB found' });
            }
            res.status(200).json({ success: true, data });
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while getting the AmanDhattarwal' });
          }
    } else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectDb(handler);
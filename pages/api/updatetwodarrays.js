import AmanDhattarwal from "../../models/AmanDhattarwals";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    const { userId, ItemId } = req.body;
    if (req.method == 'POST') {
        try {
            const updatedQues = await AmanDhattarwal.findOne({ user: userId });
            const arrayItem = updatedQues.twodarrays.find((item) => item.id === ItemId);
            arrayItem.status = !arrayItem.status;
            await updatedQues.save();
            if (!updatedQues) {
                return res.status(404).json({ error: 'User not found' });
            }
            // Send the updated user as the response
            res.status(200).json({ success: true, data: updatedQues });
        } catch (error) {
            // Handle any errors that occur during the update process
            res.status(500).json({ error: 'An error occurred while updating the AmanDhattarwal' });
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" });
    }
}

export default connectDb(handler);
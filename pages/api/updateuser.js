import User from "../../models/Users";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    // if(req.method == 'POST'){
    //         let p = await User.findByIdAndUpdate(
    //             req.body._id,
    //             req.body, { new: true }
    //         )
    //     res.status(200).json({success: "success"})
    // }else{
    //     res.status(400).json({error: "This method is not allowed"})
    // }
    console.log(req.body.id);
    try {
        // Find the user by ID and update the information
        const updatedUser = await User.findByIdAndUpdate(req.body.id, req.body, { new: true });
    
        if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Send the updated user as the response
        res.json(updatedUser);
      } catch (error) {
        // Handle any errors that occur during the update process
        res.status(500).json({ error: 'An error occurred while updating the user' });
      }
}

export default connectDb(handler);
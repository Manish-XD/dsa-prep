import AmanDhattarwal from "../../models/AmanDhattarwals";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    if(req.method == 'POST')
    {
        const { user, arrays, strings, twodarrays, searchandsorts, backtrackings, linkedlists, stackandqueues, greedys, binarytrees, binarysearchtrees, heapandhashings, graphs, tries, dps, bitmanipulations, segmenttrees } = req.body;
        let ad = new AmanDhattarwal({user, arrays, strings, twodarrays, searchandsorts, backtrackings, linkedlists, stackandqueues, greedys, binarytrees, binarysearchtrees, heapandhashings, graphs, tries, dps, bitmanipulations, segmenttrees});
        await ad.save();
        res.status(200).json({success: true});
    }
    else{
        res.status(400).json({error: "This method is not allowed"});
    }
}

export default connectDb(handler);
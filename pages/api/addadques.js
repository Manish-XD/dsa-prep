import AmanDhattarwal from "../../models/AmanDhattarwal";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        const {Array, String, D2Array, SearchAndSort, Backtracking, LinkedList, StackAndQueue, Greedy, BinaryTree, BinarySearchTree, HeapAndHashing, Graph, Tries, Dp, Bit, SegmentTree} = req.body;
            let p = new AmanDhattarwal({Array, String, D2Array, SearchAndSort, Backtracking, LinkedList, StackAndQueue, Greedy, BinaryTree, BinarySearchTree, HeapAndHashing, Graph, Tries, Dp, Bit, SegmentTree}) 
            await p.save()
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);
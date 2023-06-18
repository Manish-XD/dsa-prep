const mongoose = require('mongoose');

const AmanDhattarwalSchema = new mongoose.Schema({
    Array: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    String: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    D2Array: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    SearchAndSort: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Backtracking: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    LinkedList: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    StackAndQueue: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Greedy: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    BinaryTree: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    BinarySearchTree: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    HeapAndHashing: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Graph: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Tries: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Dp: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    Bit: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }],
    SegmentTree: [{
        index: Number,
        ques: String,
        link: String,
        level: String
    }]
});

mongoose.models = {}
export default mongoose.model("AmanDhattarwal", AmanDhattarwalSchema);
const mongoose = require('mongoose');

const AmanDhattarwalSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    arrays: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    strings: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    twodarrays: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    searchandsorts: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    backtrackings: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    linkedlists: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    stackandqueues: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    greedys: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    binarytrees: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    binarysearchtrees: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    heapandhashings: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    graphs: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    tries: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    dps: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    bitmanipulations: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }],
    segmenttrees: [{
        id: {type: Number},
        title: {type: String},
        link: {type: String},
        status: {type: Number},
        level: {type: String}
    }]
});

mongoose.models = {}
export default mongoose.model("AmanDhattarwal", AmanDhattarwalSchema);
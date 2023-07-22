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
    }]
});

mongoose.models = {}
export default mongoose.model("AmanDhattarwal", AmanDhattarwalSchema);
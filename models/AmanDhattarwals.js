const mongoose = require('mongoose');

const AmanDhattarwalSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    array: [{
        id: {type: Number},
        title: {type: String},
        status: {type: Number}
    }]
});

mongoose.models = {}
export default mongoose.model("AmanDhattarwal", AmanDhattarwalSchema);
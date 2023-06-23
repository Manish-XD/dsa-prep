const mongoose = require('mongoose');

const AmanDhattarwalSchema = new mongoose.Schema({
        title: String,
        Questions: [
                {
                        id: Number,
                        Name: String,
                        link: String,
                        difficulty: String
                }
        ]
});

mongoose.models = {}
export default mongoose.model("AmanDhattarwal", AmanDhattarwalSchema);
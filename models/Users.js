const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        monthProg: [{
                month: String,
                probSolved: Number
        }],
        sheetsSolved: [{
                name: String,
                progress: Number
        }],
        quesLevel: [{
                difficulty: String,
                solved: Number
        }],
        amanDhattarwal: [{
                Arrays: [{
                        id: Number,
                        status: Number
                }]
        }]
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("User", UserSchema);
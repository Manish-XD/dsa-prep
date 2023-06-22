const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String}
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model("User", UserSchema);
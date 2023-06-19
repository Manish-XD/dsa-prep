import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    //password: {type: String, required: true},
    totalProbSolved: {type: Number},
    accessToken:String,
    tokens:[String],
    monthProg: [{
        month: String,
        probSolved: Number
    }],
    sheetsSolved: [
        {
            name: String,
            progress: Number
        }],
    quesLevel: [
        {
            difficulty: String,
            solved: Number
        }],
    amanDhattarwal: [
        {
            index: Number,
            status: Number
        }]
}, {timestamps: true});

let User;

try {
  User = mongoose.model("users");
} catch (err) {
  User = mongoose.model("users", UserSchema);
}

export default User;
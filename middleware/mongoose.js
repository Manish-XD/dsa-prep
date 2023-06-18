import mongoose, { mongo } from "mongoose";

const connectDb = handler => async (req,res) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect('mongodb+srv://eren:Eren1234@dsa-prep.jds9cur.mongodb.net/?retryWrites=true&w=majority');
    return handler(req, res);
}

export default connectDb;


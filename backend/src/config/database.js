import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch(error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1); //exit with failure
    }
}   
export default connectDB;
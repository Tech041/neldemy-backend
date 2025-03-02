import mongoose from "mongoose";

// Connect to MongoDb
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/Neldemy-LMS`);
  
};
export default connectDB;

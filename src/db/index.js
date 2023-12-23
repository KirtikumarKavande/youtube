import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";
const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
 
    console.log("DB connected")
  } catch (err) {
    console.log("MONGO_CONNECTION_ERROR: " + err);
    process.exit(1);
  }
};
export default connectToDB;

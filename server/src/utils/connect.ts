import mongoose from "mongoose";
import config from "../config";

export default async function connect() {
  try {
    await mongoose.connect(config.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(`Failed to connect to MongoDB: ${e}`);
    process.exit(1);
  }
}

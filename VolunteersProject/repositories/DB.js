import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
mongoose.set("strictQuery",false);


export default async function connectDB(){
    await mongoose.connect(process.env.CONN_STRING);
        console.log("Connected to DB");
}
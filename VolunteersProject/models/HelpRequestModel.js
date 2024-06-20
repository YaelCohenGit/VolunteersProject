// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    _id:Number,
    familyName: String,
    status:Boolean,
    addressId:Number,
    fieldName:String,
    numOfHours:Number,
    email:String,
    VolunteerId:String
});


// Compile model from schema
const HelpRequestModel = mongoose.model("helpRequests", HelpRequestSchema,'helpRequests');

export default HelpRequestModel;
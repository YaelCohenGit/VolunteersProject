// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    id : Number,
    city : String,
    street : String,
    numOfBuild: Number
});


// Compile model from schema
const AddressModel = mongoose.model("addresses", AddressSchema);

export default AddressModel;
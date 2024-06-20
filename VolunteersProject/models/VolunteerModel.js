
import mongoose from "mongoose";


const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    
    _id:String,
    firstName: String,
    lastName: String,
    tel: String,
    email: String,
    addressId: Number,

});


const VolunteerModel = mongoose.model("volunteers", VolunteerSchema, 'volunteers');

export default VolunteerModel;
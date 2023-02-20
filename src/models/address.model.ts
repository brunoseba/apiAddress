import mongoose  from "mongoose";
import { IAddressEntry } from "../interfaces/address.interface";

const addressSchema = new mongoose.Schema({

    id:{
        type: String,
        index: true,
        require: true,
    },

    street: String,
    numbreStreet: Number,
    country: String,
    
    stateProvince:{
        name: String,
        postalCode: String,
    }
});

const Address = mongoose.model<IAddressEntry>('address', addressSchema)

export default Address;


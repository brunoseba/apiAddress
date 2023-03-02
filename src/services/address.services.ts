import { CustomAddressOmitId, GetAddressEntry } from "interfaces/address.interface";
import Address from "../models/address.model";

//export const addressService = {
export const addAddress = async (newAddressEntry: CustomAddressOmitId): Promise<CustomAddressOmitId> => {
    
    //const address = await Address.create(newAddressEntry)
    const address = await Address.create(newAddressEntry) //create(newAddressEntry)
    return address;
    
}

export const getAddressById = async (id: string): Promise<GetAddressEntry | null> => {
    const address = await Address.findById(id)
    return address;
    //addresses.find(address => address.id === id)
    /* if (address != null) {
        return address
    }
    return undefined */
}

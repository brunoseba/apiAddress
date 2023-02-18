import { CustomAddressOmitId, GetAddressEntry } from "interfaces/address.interface";
import Address from "../models/address.model";

//export const addressService = {
export const addAddress = async (newAddressEntry: CustomAddressOmitId): Promise<CustomAddressOmitId> => {
    
    //const address = await Address.create(newAddressEntry)
    const address = await Address.create(newAddressEntry) //create(newAddressEntry)
    return address.save()
    
}

export const getAddressById = async (id: number): Promise<GetAddressEntry | undefined> => {
    const address = await Address.findById((address: { id: number; }) => address.id === id)
    //addresses.find(address => address.id === id)
    if (address != null) {
        return address
    }
    return undefined
}

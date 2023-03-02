import { Document } from "mongoose";
//export interfaces

export interface StateProvince {
    name: String;
    postalCode: String;
}
export interface IAddressEntry extends Document{
    id: string;
    street: string;
    numbreStreet: Number;
    country: string;
    stateProvince: StateProvince
}

// export types
// type GetAddress = Pick<IAddressEntry, 'address' | 'country' | 'stateProvince'>
export type CustomAddressOmitId = Omit<IAddressEntry, 'id'>
// type NewAddressEntry = Omit<IAddressEntry, 'id'>
export type GetAddressEntry = Omit<IAddressEntry, 'id'>

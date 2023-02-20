import { Request, Response } from "express";
import AddressModel from "../models/address.model";
import { addAddress, getAddressById } from "../services/address.services";
//import { CustomAddressOmitId } from "../interfaces/address.interface";
//import mongoose from "mongoose";
//import { addressSchema } from "../models/address.model";

//const Address = mongoose.model("Address", addressSchema);

export class AddressController {
    /**
     * createAddress
     */
    public createAddress(req: Request, res: Response): any{
        try {
            let campos = new AddressModel (
                req.body
            )

            let newAddress = addAddress(campos)
            if (newAddress == null) {
                res.status(502).send("error to create address"); 
            }
            res.sendStatus(200).send({message: "Address created"});
            
        } catch (e: any) {
            res.sendStatus(400).send(e.message);
        }
    }

    /**
     * getAddressID
     */
    public getAddress(req: Request, res: Response) {

        let address = getAddressById(+req.params.addressId)
        return (address != null) 
            ? res.send(address)
            : res.status(404).send("Address not found");

        /*AddressModel.findById(req.params.addressId, (err: any, address: any) => {
            if (err) {
                res.status(502).send(err.message);
            }
            res.json(address);
        });*/
    }

    /**
     * updateAddress
     */
    public updateAddress(req: Request, res: Response) {
        AddressModel.findByIdAndUpdate({_id: req.params.addressId}, req.body, (err:any, address:any) => {
            if(err){
                res.status(502).send(err.message);
            }
            res.status(200).json(address);
        });
    }

    /**
     * deleteAddress
     */
    public deleteAddress(req: Request, res: Response) {
        AddressModel.findByIdAndDelete({_id: req.params.addressId}, (err: any) => {
            if (err) {
                res.status(502).send(err.message);
            }
            res.status(200).json({message: 'Address deleted'});
        });
    }

}

/*export const createAddress = async (req: Request, res: Response) => {
    
    // @ts-ignore
    const address: IAddress = new Address({
        address: req.body.address,
        country: req.body.country,
        stateProvince: req.body.stateProvince
    });
    // @ts-ignore
    const saveAddress = await address.save();
    res.status(200).json(saveAddress);
};*/


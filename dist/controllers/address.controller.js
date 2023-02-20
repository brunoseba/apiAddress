"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const address_model_1 = __importDefault(require("../models/address.model"));
const address_services_1 = require("../services/address.services");
//import mongoose from "mongoose";
//import { addressSchema } from "../models/address.model";
//const Address = mongoose.model("Address", addressSchema);
class AddressController {
    /**
     * createAddress
     */
    createAddress(req, res) {
        try {
            //const {street, numbreStreet, country, postalCode, stateProvince} = req.body;
            let newAddress = (0, address_services_1.addAddress)(req.body);
            //newAddress.save((err: any, address: any) => {
            if (newAddress == null) {
                res.status(502).send("error to create address");
            }
            //res.json(newAddress);
            //})
            res.sendStatus(200).send({ message: "Address created" });
        }
        catch (e) {
            res.sendStatus(400).send(e.message);
        }
    }
    /**
     * getAddressID
     */
    getAddress(req, res) {
        let address = (0, address_services_1.getAddressById)(+req.params.addressId);
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
    updateAddress(req, res) {
        address_model_1.default.findByIdAndUpdate({ _id: req.params.addressId }, req.body, (err, address) => {
            if (err) {
                res.status(502).send(err.message);
            }
            res.status(200).json(address);
        });
    }
    /**
     * deleteAddress
     */
    deleteAddress(req, res) {
        address_model_1.default.findByIdAndDelete({ _id: req.params.addressId }, (err) => {
            if (err) {
                res.status(502).send(err.message);
            }
            res.status(200).json({ message: 'Address deleted' });
        });
    }
}
exports.AddressController = AddressController;
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
//# sourceMappingURL=address.controller.js.map
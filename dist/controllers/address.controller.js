"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddress = exports.AddressController = void 0;
const address_model_1 = __importDefault(require("../models/address.model"));
const address_services_1 = require("../services/address.services");
//import { CustomAddressOmitId } from "../interfaces/address.interface";
//import mongoose from "mongoose";
//import { addressSchema } from "../models/address.model";
//const Address = mongoose.model("Address", addressSchema);
class AddressController {
    /**
     * createAddress
     */
    createAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { street, numbreStreet, country, stateProvince } = req.body;
                const campos = new address_model_1.default({ street, numbreStreet, country, stateProvince });
                const newAddress = yield (0, address_services_1.addAddress)(campos);
                if (!newAddress)
                    return res.status(502).send("error to create address");
                return res.status(200).send({ message: "Address created" });
            }
            catch (error) {
                return res.sendStatus(400).send(error.message);
            }
        });
    }
    /**
     * getAddressID
     */
    getAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield (0, address_services_1.getAddressById)(req.params.id);
            return address
                ? res.status(200).send(address)
                : res.status(404).send("Address not found");
            /*AddressModel.findById(req.params.addressId, (err: any, address: any) => {
                    if (err) {
                            res.status(502).send(err.message);
                    }
                    res.json(address);
            });*/
        });
    }
    /**
     * updateAddress
     */
    updateAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addressUpdated = yield address_model_1.default.findByIdAndUpdate(req.params.id, req.body);
                return res.status(200).json(addressUpdated);
            }
            catch (error) {
                return res.status(502).send(error.message);
            }
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
const createAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const address = new Address({
        address: req.body.address,
        country: req.body.country,
        stateProvince: req.body.stateProvince
    });
    const saveAddress = yield address.save();
    res.status(200).json(saveAddress);
});
exports.createAddress = createAddress;
//# sourceMappingURL=address.controller.js.map
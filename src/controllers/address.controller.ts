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
	public async createAddress(req: Request, res: Response): Promise<any> {
		try {
			const { street, numbreStreet, country, stateProvince } = req.body;
			
			const campos = new AddressModel(
				{ street, numbreStreet, country, stateProvince }
			)

			const newAddress = await  addAddress(campos)
			
			if (!newAddress) 
				return res.status(502).send("error to create address");
			
			return res.status(200).send({ message: "Address created" });

		} catch (error: any) {
			return res.sendStatus(400).send(error.message);
		}
	}

	/**
	 * getAddressID
	 */
	public async getAddress(req: Request, res: Response) {

		const address = await getAddressById(req.params.id)
		return address
			? res.status(200).send(address)
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
	public async updateAddress(req: Request, res: Response) {
		try{
			const addressUpdated = await AddressModel.findByIdAndUpdate(req.params.id , req.body) 
			return res.status(200).json(addressUpdated);

		} catch(error: any){
			return res.status(502).send(error.message);
		}
	}

	/**
	 * deleteAddress
	 */
	public deleteAddress(req: Request, res: Response) {
		AddressModel.findByIdAndDelete({ _id: req.params.addressId }, (err: any) => {
			if (err) {
				res.status(502).send(err.message);
			}
			res.status(200).json({ message: 'Address deleted' });
		});
	}

}

export const createAddress = async (req: Request, res: Response) => {

	// @ts-ignore
	const address: IAddress = new Address({
		address: req.body.address,
		country: req.body.country,
		stateProvince: req.body.stateProvince
	});
	const saveAddress = await address.save();
	res.status(200).json(saveAddress);
};


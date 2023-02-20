//import { Router} from "express";
import { Request, Response } from "express";
//import { request } from "http";
import {AddressController} from "../controllers/address.controller"
//const router: Router = Router();
//const address: AddressController = new AddressController()

export class Routes {
    /**
     * addressController
     */
    public addressController: AddressController = new AddressController();
        
    /**
     * route
     */
    public routes(app : any): void {
        app.use((_req: Request, res: Response, next: any) =>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.route("/")
        .get((_req: Request, res: Response) => {
            res.status(200).send({message: "Success"});
        });

        app.route("/api/v1/address/createAddress")
        .post(this.addressController.createAddress)

        app.route("/api/v1/address/:id")
        .get(this.addressController.getAddress)
        .put(this.addressController.updateAddress)
        .delete(this.addressController.deleteAddress);
    }
}

/*router.get('/ping', (_, res) => {
    res.status(200).send('bienvenido a la api de addresses');
});

router.post('/createAddress', address.createAddress);
router.get('/:id', address.getAddress);
router.put('/:id', address.updateAddress);
router.delete('/:id', address.deleteAddress);*/


//export default router;
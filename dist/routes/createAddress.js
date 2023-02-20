"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
//import { request } from "http";
const address_controller_1 = require("../controllers/address.controller");
//const router: Router = Router();
//const address: AddressController = new AddressController()
class Routes {
    constructor() {
        /**
         * addressController
         */
        this.addressController = new address_controller_1.AddressController();
    }
    /**
     * route
     */
    routes(app) {
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.route("/")
            .get((req, res) => {
            res.status(200).send({ message: "Success" });
        });
        app.route("/api/v1/address/createAddress")
            .post(this.addressController.createAddress);
        app.route("/api/v1/address/:id")
            .get(this.addressController.getAddress)
            .put(this.addressController.updateAddress)
            .delete(this.addressController.deleteAddress);
    }
}
exports.Routes = Routes;
/*router.get('/ping', (_, res) => {
    res.status(200).send('bienvenido a la api de addresses');
});

router.post('/createAddress', address.createAddress);
router.get('/:id', address.getAddress);
router.put('/:id', address.updateAddress);
router.delete('/:id', address.deleteAddress);*/
//export default router;
//# sourceMappingURL=createAddress.js.map
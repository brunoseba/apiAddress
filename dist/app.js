"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import addresRoutes from "./routes/createAddress";
const morgan_1 = __importDefault(require("morgan"));
const address_route_1 = require("./routes/address.route");
const mongoose = __importStar(require("mongoose"));
const bodyParser = __importStar(require("body-parser"));
class App {
    constructor() {
        /**
         * routeAd
         */
        this.routeAd = new address_route_1.Routes();
        this.mongoUrl = "mongodb://localhost/address";
        this.app = (0, express_1.default)();
        this.config();
        this.routeAd.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    config() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(bodyParser.json());
    }
}
exports.default = new App().app;
// Create a new express application
//const app: Application = express();
//app.set('port', 9000);
//midldlewares
//app.use(morgan('dev'));
//app.use(express.json());
//routes
//app.use('/api/v1/address',addresRoutes);
/*app.get('/', function(req, res) {
    res.status(200).send('OK');
});

export default app;*/ 
//# sourceMappingURL=app.js.map
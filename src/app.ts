import express from 'express'
//import addresRoutes from "./routes/createAddress";
import morgan from "morgan";
import {Routes} from "./routes/address.route"
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";

class App {
    /**
     * app
     */
    public app: express.Application;
    /**
     * routeAd
     */
    public routeAd: Routes = new Routes();
    public mongoUrl: string = "mongodb://localhost/address";

    constructor(){
        this.app = express();
        this.config();
        this.routeAd.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        //mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private config(): void {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
    }
}

export default new App().app;

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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//import "../config/database";
const port = 9000;
/*app.get("/", (req: any, res: any) => {
    res.status(200).send("Welcome to API")
}

app.listen(9000, () => {
    console.log("Listening on port 9000");
});*/
/*app.listen(app.get('port'), function() {
    console.log('Example server listening on port', app.get('port'));
});*/
app_1.default.listen(port, function () {
    console.log('Example server listening on port', app_1.default.get('port'));
});
//# sourceMappingURL=index.js.map
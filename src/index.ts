import app from "./app";
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

app.listen(port, function() {
    console.log('Example server listening on port', app.get('port'));
});
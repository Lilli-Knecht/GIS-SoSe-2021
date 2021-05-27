"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_1 = void 0;
const Http = require("http");
var Aufgabe3_1;
(function (Aufgabe3_1) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Prot wird auf 8100 gesetzt (localhost:8100)
    let server = Http.createServer(); //erstellen eines einfachen Servers
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe 
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe3_1 = exports.Aufgabe3_1 || (exports.Aufgabe3_1 = {}));
//# sourceMappingURL=serverscript.js.map
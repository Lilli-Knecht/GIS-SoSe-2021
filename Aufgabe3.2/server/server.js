"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe3_2;
(function (Aufgabe3_2) {
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
        console.log(_request.url); //gibt Url-Bounce zurück --> soll jetzt geändert werden
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad = url.pathname; //pathname der Url in String speichern
            if (pfad == "/html") { //um hier Überprüdung machn zu können, ob welchen path man gegenagen ist 
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") { //um hier Überprüdung machn zu können, welchen path man gegangen ist 
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString); //in Konsole
                _response.write(jsonString); //Anwort, die zurückkommt   
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
})(Aufgabe3_2 = exports.Aufgabe3_2 || (exports.Aufgabe3_2 = {}));
//# sourceMappingURL=server.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    //let urlDBLokal: string = "mongodb://localhost:27017"; //lokal
    let urlDB = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Aufgabe3_4?retryWrites=true&w=majority";
    //hier nochmal neu bei MongoDB Link und Datendank und collections  anlegen 
    let port = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt (localhost:8100)
    serverStarten(port); //Server auf diesem Port starten
    function serverStarten(_port) {
        let server = Http.createServer(); //erstellen eines einfachen Servers
        console.log("Server gestartet");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        //hier aufruf der Funktionen, je nachdem was man gedrückt hat 
    }
    async function scoredatenSpeichern(_url, _scoredaten) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort = "Eingetragen";
        return antwort;
    }
    async function hinzufuegenUndAnzeigen(_url, _karte) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_karte); //Daten in die Datenbank speichern 
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    //let urlDBLokal: string = "mongodb://localhost:27017"; //lokal
    let urlDB = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Aufgabe3_4?retryWrites=true&w=majority";
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
        console.log("Angekommen.");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad = url.pathname; //pathname der Url in String speichern
            let eintrag = { name: url.query.name + "", alter: parseInt(url.query.alter + ""), tier: url.query.tier + "" }; //"" damit es als String erkannt wird 
            if (pfad == "/anzeigen") { //hier Pfad, dass Daten aus Datenbank ziehen und anzeigen 
                let daten = await dbAuslesen(urlDB);
                console.log(daten);
                _response.write(JSON.stringify(daten)); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
            else if (pfad == "/abschicken") { //hier Pfad, dass ich Daten abgeschickt hab und nun in Datenbank speichern will
                let antwort = await abspeichern(urlDB, eintrag); //hier dann abspeichern aufrufen 
                console.log(antwort);
                _response.write(antwort); //Anwort, die zurückkommt 
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
    async function abspeichern(_url, _eintrag) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_eintrag); //Daten in die Datenbank speichern 
        let antwort = "Eingetragen";
        return antwort;
    }
    async function dbAuslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //hier komplette Daten aus der Datenbank
        return result;
    }
    //Beispiel aus der Vorlesung
    /*async function connectToDB(_url: string): Promise <void> { //Verbindung zur MongoDatenbank
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let students: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Students"); //Collection aufrufen
        

        //Beispielcode aus der Vorlesung
        //let studi1: Student = {name: "Max Mustermann", matrikelnummer: 345678}; //neuen Studi anlegen
        //students.insertOne(studi1);
    
        //let cursor: Mongo.Cursor = students.find(); //hier auch wieder spezielle Suche möglich mit .find({name: ""...""})
        //let result: Student[] = await cursor.toArray();
        //console.log(result);
        
        //students.deleteOne({matrikelnummer: ...}); --> hier Einen bestimmten mit einer Eigenschaft wieder rauslöschen
        //einfügen, löschen, updaten sind die wichtigen Funktionen
    }*/
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map
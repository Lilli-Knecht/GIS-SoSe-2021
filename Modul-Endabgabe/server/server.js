"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    //let urlDB: string = "mongodb://localhost:27017"; //lokal
    let urlDB = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Memory?retryWrites=true&w=majority";
    let port = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt (localhost:8100)
    serverStarten(port); //Server auf diesem Port starten
    function serverStarten(_port) {
        let server = Http.createServer(); //erstellen eines einfachen Servers
        console.log("Server gestartet!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        //hier aufruf der Funktionen, je nachdem was man gedrückt hat 
        console.log("Angekommen.");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad = url.pathname; //pathname der Url in String speichern
            let karte = { bildname: url.query.bildname + "", bildurl: url.query.bildurl + "" }; //"" damit es als String erkannt wird 
            let entfernen = url.query.bildname + "";
            let score = { name: url.query.name + "", zeit: parseInt(url.query.zeit + "") };
            if (pfad == "/kartenAnzeigen") {
                let anzeige = await memoryAnzeigen(urlDB);
                //console.log(anzeige);
                _response.write(JSON.stringify(anzeige));
            }
            else if (pfad == "/hinzufuegen") { //hier Pfad, dass man Bild hinzufügen will
                let antwort = await hinzufuegen(urlDB, karte);
                console.log(antwort);
                _response.write(antwort); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
            else if (pfad == "/loeschen") {
                let antwort = await loeschen(urlDB, entfernen); //hier dann loeschen aufrufen 
                console.log(antwort);
                _response.write(antwort); //hier aktualisierte Daten aus der Datenbank als Antowrt zurückgeben 
            }
            else if (pfad == "/spielen") { //erstmal alle Bilder aus Datenbank ausgeben und dann auswählen und anordnen (in der script.ts)
                let spielkarten = await memoryAnzeigen(urlDB);
                //console.log(spielkarten);
                _response.write(JSON.stringify(spielkarten)); //alle Bildkarten zurückgeben 
            }
            else if (pfad == "/scoredatenAbgeschickt") { //hier Pfad, dass ich Daten abgeschickt hab und nun in Datenbank speichern will
                let antwort = await scoredatenSpeichern(urlDB, score);
                console.log(antwort);
                _response.write(antwort); //Anwort, die zurückkommt 
            }
            else if (pfad == "/scoredatenAnzeigen") { //hier Pfad, dass Daten aus Datenbank angezeigt werden
                let daten = await scoredaten(urlDB);
                //console.log(daten);
                _response.write(JSON.stringify(daten)); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
    async function memoryAnzeigen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let bildkarten = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        let cursor = bildkarten.find();
        let spielkarten = await cursor.toArray(); //alle zurückgeben 
        return spielkarten;
    }
    //hier immer nur undefined --> warum?
    async function hinzufuegen(_url, _karte) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let bildkarten = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.insertOne(_karte); //Daten in die Datenbank speichern 
        return "hinzugefügt";
    }
    //löschen mit bildnamen funktioniert nicht --> warum?
    async function loeschen(_url, _name) {
        //hier dann Bildkarte löschen entweder über Bildname oder über id (id wäre eindeutiger)
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let bildkarten = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.deleteOne({ bildname: _name }); //löscht Bildkarte mit diesem Namen 
        return "gelöscht";
    }
    async function scoredatenSpeichern(_url, _scoredaten) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        infos.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort = "Eingetragen";
        return antwort;
    }
    async function scoredaten(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map
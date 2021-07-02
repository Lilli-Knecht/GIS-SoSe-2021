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
        console.log("Angekommen.");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad = url.pathname; //pathname der Url in String speichern
            let score = { name: url.query.name + "", zeit: parseInt(url.query.alter + "") }; //"" damit es als String erkannt wird 
            let karte = { bildname: url.query.bildname + "", bildurl: url.query.bildurl + "" };
            let entfernen = url.query.bildname;
            if (pfad == "/scoredatenAnzeigen") { //hier Pfad, dass Daten aus Datenbank angezeigt werden
                let daten = await topZehn(urlDB);
                console.log(daten);
                //hier jetzt Daten durchgehen und dann nur die besten Zehn (Zeit) ausgeben
                //mit for-schleife 
                _response.write(JSON.stringify(daten)); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
            else if (pfad == "/scoredatenAbgeschickt") { //hier Pfad, dass ich Daten abgeschickt hab und nun in Datenbank speichern will
                let antwort = await scoredatenSpeichern(urlDB, score);
                console.log(antwort);
                _response.write(antwort); //Anwort, die zurückkommt 
            }
            else if (pfad == "/hinzufuegen") { //hier Pfad, dass man Bild hinzufügen will
                let karten = await hinzufuegenUndAnzeigen(urlDB, karte);
                console.log(karten);
                _response.write(JSON.stringify(karten)); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
            else if (pfad == "/loeschen") {
                let karten = await loeschen(urlDB, entfernen); //hier dann loeschen aufrufen 
                console.log(karten);
                _response.write(JSON.stringify(karten)); //hier aktualisierte Daten aus der Datenbank als Antowrt zurückgeben 
            }
            else if (pfad == "/spielen") { //erstmal alle Bilder aus DAtenbank ausgeben und dann auswählen und anordnen (in der script.ts)
                let spielkarten = await memoryAnzeigen(urlDB);
                console.log(spielkarten);
                _response.write(JSON.stringify(spielkarten)); //Bildkarten zurückgeben 
            }
            else if (pfad == "/kartenAnzeigen") {
                let anzeige = await memoryAnzeigen(urlDB);
                console.log(anzeige);
                _response.write(JSON.stringify(anzeige));
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
    async function memoryAnzeigen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        let cursor = infos.find();
        let spielkarten = await cursor.toArray();
        return spielkarten;
    }
    async function scoredatenSpeichern(_url, _scoredaten) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        infos.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort = "Eingetragen";
        return antwort;
    }
    async function hinzufuegenUndAnzeigen(_url, _karte) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        infos.insertOne(_karte); //Daten in die Datenbank speichern 
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }
    async function topZehn(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }
    async function loeschen(_url, _name) {
        //hier dann Bildkarte löschen entweder über Bildname oder über id (id wäre eindeutiger)
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        infos.deleteOne({ name: _name }); //löscht Bildkarte mit diesem Namen 
        let cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result = await cursor.toArray();
        return result;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map
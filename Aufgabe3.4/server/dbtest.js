"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Mongo = require("mongodb"); //Löschen, gar nicht notwendig, weil alles in server.ts
var Aufgabe3_4;
(function (Aufgabe3_4) {
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let students = mongoClient.db("Test").collection("Students");
        //let studi1: Student = {name: "Max Mustermann", matrikelnummer: 345678}; //neuen Studi anlegen 
        //students.insertOne(studi1);
        let cursor = students.find(); //hier auch wieder spezielle Suche möglich mit .find({name: ""...""})
        let result = await cursor.toArray();
        console.log(result);
        //students.deleteOne({matrikelnummer: ...}); --> hier Einen bestimmten mit einer Eigenschaft wieder rauslöschen 
        //einfügen, löschen, updaten sind die wichtigen Funktionen 
    }
    connectToDB("mongodb://localhost:27017"); //lokal testen 
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//bonus löschen: am besten über Objekt-ID
//# sourceMappingURL=dbtest.js.map
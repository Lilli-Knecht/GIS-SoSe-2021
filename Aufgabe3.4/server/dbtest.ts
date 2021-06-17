import * as Mongo from "mongodb"; //Löschen, gar nicht notwendig, weil alles in server.ts

export namespace Aufgabe3_4 { 

    async function connectToDB(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
        
        //let studi1: Student = {name: "Max Mustermann", matrikelnummer: 345678}; //neuen Studi anlegen 
        //students.insertOne(studi1);
    
        let cursor: Mongo.Cursor = students.find(); //hier auch wieder spezielle Suche möglich mit .find({name: ""...""})
        let result: Student[] = await cursor.toArray();
        console.log(result);
        
        //students.deleteOne({matrikelnummer: ...}); --> hier Einen bestimmten mit einer Eigenschaft wieder rauslöschen 
        //einfügen, löschen, updaten sind die wichtigen Funktionen 
    }
    
    connectToDB("mongodb://localhost:27017"); //lokal testen 
    
    interface Student { //Hilfe für den Programmierer/uns
        name: string;
        //vorname: string;
        matrikelnummer: number;
    }
}



//bonus löschen: am besten über Objekt-ID
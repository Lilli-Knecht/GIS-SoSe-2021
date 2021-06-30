import * as Http from "http";
import * as Url from "url"; 
import * as Mongo from "mongodb";

export namespace Endabgabe {

    //let urlDBLokal: string = "mongodb://localhost:27017"; //lokal
    let urlDB: string = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Aufgabe3_4?retryWrites=true&w=majority"; 
    //hier nochmal neu bei MongoDB Link und Datendank und collections  anlegen 
    
    let port: number = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt (localhost:8100)


    serverStarten(port); //Server auf diesem Port starten


    function serverStarten(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //erstellen eines einfachen Servers
        console.log("Server gestartet");

        server.listen(_port);
        server.addListener("request", handleRequest); 
        
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { 
        //hier aufruf der Funktionen, je nachdem was man gedrückt hat 
    }

    async function scoredatenSpeichern(_url: string, _scoredaten: Scoredaten): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort: string = "Eingetragen";
        return antwort;
    }

    async function hinzufuegenUndAnzeigen(_url: string, _karte: Memorykarte): Promise<Memorykarte[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_karte); //Daten in die Datenbank speichern 
        
        let cursor: Mongo.Cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result: Memorykarte[] = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }

    interface Memorykarte {
        bildname: string;
        url: string;
    }

    interface Scoredaten {
        name: string;
        zeit: number;
    }



}
import * as Http from "http";
import * as Url from "url"; 
import * as Mongo from "mongodb";

export namespace Endabgabe {

    //let urlDBLokal: string = "mongodb://localhost:27017"; //lokal
    let urlDB: string = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Memory?retryWrites=true&w=majority"; 
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
        console.log("Angekommen.");

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad: string = <string>url.pathname; //pathname der Url in String speichern
            let score: Scoredaten = {name: url.query.name + "", zeit: parseInt(url.query.alter + "")}; //"" damit es als String erkannt wird 
            let karte: Memorykarte = {bildname: url.query.bildname + "", bildurl: url.query.bildurl + ""};
            let entfernen: string | string[] = url.query.bildname;

            if (pfad == "/scoredatenAnzeigen") { //hier Pfad, dass Daten aus Datenbank angezeigt werden
        
                let daten: Scoredaten[] = await topZehn(urlDB);
                console.log(daten);
                //hier jetzt Daten durchgehen und dann nur die besten Zehn (Zeit) ausgeben
                //mit for-schleife 
                _response.write(JSON.stringify(daten)); //hier dann die Datenbank auslesen und als Antort zurückgeben

            }
            else if (pfad == "/scoredatenAbgeschickt") { //hier Pfad, dass ich Daten abgeschickt hab und nun in Datenbank speichern will
                
                let antwort: string = await scoredatenSpeichern(urlDB, score); 
                console.log(antwort);
                _response.write(antwort); //Anwort, die zurückkommt 
                  
            }
            else if (pfad == "/hinzufuegen") { //hier Pfad, dass man Bild hinzufügen will

                let karten: Memorykarte[] = await hinzufuegenUndAnzeigen(urlDB, karte);
                console.log(karten);
                _response.write(JSON.stringify(karten)); //hier dann die Datenbank auslesen und als Antort zurückgeben
            }
            else if (pfad == "/loeschen") {
                let karten: Memorykarte[] = await loeschen(urlDB, entfernen); //hier dann loeschen aufrufen 
                console.log(karten);
                _response.write(JSON.stringify(karten)); //hier aktualisierte Daten aus der Datenbank als Antowrt zurückgeben 
                
            }
            else if (pfad == "/erstellen") {
                //hier dann Memory erstellen 
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }


    async function scoredatenSpeichern(_url: string, _scoredaten: Scoredaten): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        infos.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort: string = "Eingetragen";
        return antwort;
    }

    async function hinzufuegenUndAnzeigen(_url: string, _karte: Memorykarte): Promise<Memorykarte[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        infos.insertOne(_karte); //Daten in die Datenbank speichern 
        
        let cursor: Mongo.Cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result: Memorykarte[] = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }

    async function topZehn(_url: string): Promise<Scoredaten[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        let cursor: Mongo.Cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result: Scoredaten[] = await cursor.toArray(); //hier komplette Daten aus der Datenbank 
        return result;
    }

    async function loeschen(_url: string, _name: string | string[]): Promise<Memorykarte[]> {
        //hier dann Bildkarte löschen entweder über Bildname oder über id (id wäre eindeutiger)
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        //hier Datenbank und Collections richtig auswählen !!!!
        let infos: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        infos.deleteOne({name: _name}); //löscht Bildkarte mit diesem Namen 

        let cursor: Mongo.Cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result: Memorykarte[] = await cursor.toArray();
        return result;
    }

    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }

    interface Scoredaten {
        name: string;
        zeit: number;
    }



}
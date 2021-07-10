import * as Http from "http";
import * as Url from "url"; 
import * as Mongo from "mongodb";

export namespace Endabgabe {

    //let urlDB: string = "mongodb://localhost:27017"; //lokal
    let urlDB: string = "mongodb+srv://testuser:test1707@lilliknecht.8k6vl.mongodb.net/Memory?retryWrites=true&w=majority"; 
    
    let port: number = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt (localhost:8100)

    serverStarten(port); //Server auf diesem Port starten

    function serverStarten(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //erstellen eines einfachen Servers
        console.log("Server gestartet!");

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
            let karte: Memorykarte = {bildname: url.query.bildname + "", bildurl: url.query.bildurl + ""}; //"" damit es als String erkannt wird 
            let entfernen: string | string[] = url.query.bildname + "";
            let score: Scoredaten = {name: url.query.name + "", zeit: url.query.zeit + ""};

            if (pfad == "/kartenAnzeigen") {
                let anzeige: Memorykarte[] = await memoryAnzeigen(urlDB);
                //console.log(anzeige);
                _response.write(JSON.stringify(anzeige)); //Alle Bildkarten werden zurückgegeben
                
            }
            else if (pfad == "/hinzufuegen") { 
                let antwort: string = await hinzufuegen(urlDB, karte);
                console.log(antwort);
                _response.write(antwort); //hier dann die Datenbank auslesen und als Antort zurückgeben
                
            }
            else if (pfad == "/loeschen") {
                let antwort: string = await loeschen(urlDB, entfernen);  
                console.log(antwort);
                _response.write(antwort); //hier aktualisierte Daten aus der Datenbank als Antowrt zurückgeben 
                
            }
            else if (pfad == "/spielen") { //erstmal alle Bilder aus Datenbank ausgeben und dann auswählen und anordnen (in der script.ts)
                let spielkarten: Memorykarte[] = await memoryAnzeigen(urlDB);
                //console.log(spielkarten);
                _response.write(JSON.stringify(spielkarten)); //alle Bildkarten zurückgeben 

            }
            else if (pfad == "/scoredatenAbgeschickt") { 
                let antwort: string = await scoredatenSpeichern(urlDB, score); 
                console.log(antwort);
                _response.write(antwort); //Anwort, die zurückkommt 
                  
            }
            else if (pfad == "/scoredatenAnzeigen") { 
                let daten: Scoredaten[] = await scoredaten(urlDB);
                //console.log(daten);
                _response.write(JSON.stringify(daten)); //hier dann die Datenbank auslesen und als Antort zurückgeben

            }


        }
        _response.end(); //Antwort fertig und zurückschicken 

    }

    async function memoryAnzeigen(_url: string): Promise <Memorykarte[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let bildkarten: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        
        let cursor: Mongo.Cursor = bildkarten.find(); 
        let spielkarten: Memorykarte[] = await cursor.toArray(); //alle zurückgeben 
        return spielkarten;
    }


    async function hinzufuegen(_url: string, _karte: Memorykarte): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let bildkarten: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.insertOne(_karte); //Daten in die Datenbank speichern 
        
        return "hinzugefügt";
    }



    async function loeschen(_url: string, _name: string | string[]): Promise<string> {
        //hier dann Bildkarte löschen entweder über Bildname oder über id 
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let bildkarten: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.deleteOne({bildname: _name}); //löscht Bildkarte mit diesem Namen 

        return "gelöscht";
    }

    async function scoredatenSpeichern(_url: string, _scoredaten: Scoredaten): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let spielerdaten: Mongo.Collection = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        spielerdaten.insertOne(_scoredaten); //Daten in die Datenbank speichern 
        let antwort: string = "Deine Daten wurden eingetragen";
        return antwort;
    }

    async function scoredaten(_url: string): Promise<Scoredaten[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let spielerdaten: Mongo.Collection = mongoClient.db("Memory").collection("Spielerdaten"); //Collection aufrufen
        let cursor: Mongo.Cursor = spielerdaten.find(); 
        let result: Scoredaten[] = await cursor.toArray(); //hier komplette Daten aus der Datenbank zurückgeben
        return result;
    }





    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }

    interface Scoredaten {
        name: string;
        zeit: string;
    }






}
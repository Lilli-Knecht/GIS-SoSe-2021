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

            if (pfad == "/kartenAnzeigen") {
                let anzeige: Memorykarte[] = await memoryAnzeigen(urlDB);
                console.log(anzeige);
                _response.write(JSON.stringify(anzeige));
                
            }
            else if (pfad == "/hinzufuegen") { //hier Pfad, dass man Bild hinzufügen will
                let antwort: string = await hinzufuegen(urlDB, karte);
                console.log(antwort);
                _response.write(antwort); //hier dann die Datenbank auslesen und als Antort zurückgeben
                
            }
            else if (pfad == "/loeschen") {
                let antwort: string = await loeschen(urlDB, entfernen); //hier dann loeschen aufrufen 
                console.log(antwort);
                _response.write(antwort); //hier aktualisierte Daten aus der Datenbank als Antowrt zurückgeben 
                
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


    //hier immer nur undefined --> warum?
    async function hinzufuegen(_url: string, _karte: Memorykarte): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let bildkarten: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.insertOne(_karte); //Daten in die Datenbank speichern 
        
        return "hinzugefügt";
    }



    //löschen mit bildnamen funktioniert nicht --> warum?
    async function loeschen(_url: string, _name: string | string[]): Promise<string> {
        //hier dann Bildkarte löschen entweder über Bildname oder über id (id wäre eindeutiger)
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let bildkarten: Mongo.Collection = mongoClient.db("Memory").collection("Bildkarten"); //Collection aufrufen
        bildkarten.deleteOne({bildname: _name}); //löscht Bildkarte mit diesem Namen 

        return "gelöscht";
    }



    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }





}
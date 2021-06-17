import * as Http from "http";
import * as Url from "url"; 
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 { 
    
    let urlDBLokal: string = "mongodb://localhost:27017"; //lokal
    //let urlDB: string = "mongodb+srv://testuser:<password>@lilliknecht.8k6vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
    let port: number = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Port wird auf 8100 gesetzt (localhost:8100)


    serverStarten(port); //Server auf diesem Port starten
    //connectToDB(urlDB); //mit Datenbank verbinden (lokal testen)


    function serverStarten(_port: number): void {
        let server: Http.Server = Http.createServer(); //erstellen eines einfachen Servers
        console.log("Server gestartet");

        server.listen(_port);
        server.addListener("request", handleRequest); 
        
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { 
        console.log("Angekommen.");

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad: string = <string>url.pathname; //pathname der Url in String speichern
            let eintrag: Eintrag = {vorname: url.query.vorname + "", nachname: url.query.nachname + "", wunschhaustier: url.query.wunschhaustier + ""}; //"" damit es als String erkannt wird 

            if (pfad == "/anzeigen") { //hier Pfad, dass Daten aus Datenbank ziehen und anzeigen 
        
                let daten: Eintrag[] = await dbAuslesen(urlDBLokal);
                _response.write(JSON.stringify(daten)); //hier dann die DAtenbank auslesen und als Antort zurückgeben

            }
            else if (pfad == "/abschicken") { //hier Pfad, dass ich Daten abgeschickt hab und nun in Datenbank speichern will
                
                let antwort: string = await abspeichern(urlDBLokal, eintrag); //hier dann abspeichern aufrufen 
                _response.write(antwort); //Anwort, die zurückkommt 
                  
            }
            else if (pfad == "/löschen") {

                let id: string = <string>url.query.id; //hier nochmal wegen der id schauen
                loeschen(urlDBLokal, id); //hier id übergeben, von Objekt, was gelöscht werden soll
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
    

    async function abspeichern(_url: string, _eintrag: Eintrag): Promise<string> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let infos: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.insertOne(_eintrag); //Daten in die Datenbank speichern 
        let antwort: string = "Eingetragen";
        return antwort;
    }

    async function dbAuslesen(_url: string): Promise<Eintrag[]> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let infos: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        
        let cursor: Mongo.Cursor = infos.find(); //hier auch wieder spezielle Suche möglich mit .find({name: "..."})
        let result: Eintrag[] = await cursor.toArray(); //hier komplette Daten aus der Datenbank
        return result;
    }

    async function loeschen(_url: string, _idnummer: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
    
        let infos: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Randominfos"); //Collection aufrufen
        infos.deleteOne({_id: _idnummer});

    }

    interface Eintrag { //Hilfe für den Programmierer/uns
        vorname: string;
        nachname: string;
        wunschhaustier: string;
    }

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
    
}
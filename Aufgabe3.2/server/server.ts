import * as Http from "http";
import * as Url from "url"; 

export namespace Aufgabe3_2 {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT); //Port ist "Hafen" 
    if (!port)
        port = 8100; //Prot wird auf 8100 gesetzt (localhost:8100)

    let server: Http.Server = Http.createServer(); //erstellen eines einfachen Servers
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening"); //Konsolenausgabe
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Konsolenausgabe 
        console.log(_request.url); //gibt Url-Bounce zurück --> soll jetzt geändert werden
        
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften; Typ:Html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis --> * alle dürfen zugreifen 
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad: string = <string>url.pathname; //pathname der Url in String speichern
            if (pfad == "/html") { //um hier Überprüdung machn zu können, ob welchen path man gegenagen ist 
                for (let key in url.query) {
                    _response.write(key + ":" + url.query [key] + "<br/>"); 
                }  
            }
            else if (pfad == "/json") { //um hier Überprüdung machn zu können, welchen path man gegangen ist 
                let jsonString: string = JSON.stringify(url.query); 
                console.log(jsonString); //in Konsole
                _response.write(jsonString); //Anwort, die zurückkommt   
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
}
import * as Http from "http";

export namespace Aufgabe3_1 {
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
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
}
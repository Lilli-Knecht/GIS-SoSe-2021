"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function datenEingeben() {
        let daten = new FormData(document.forms[0]);
        let url = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttonScoredaten = document.getElementById("abschicken"); //Button machen auf DeinScore
    buttonScoredaten.addEventListener("click", datenEingeben);
    //bei der hinzufügen auch gleich die Anzeige der DAten mitrein oder eigene Funktion?
    async function bildHinzu() {
        let daten = new FormData(document.forms[0]);
        let url = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttonHinzu = document.getElementById("hinzufuegen"); //Button machen auf Admin
    buttonHinzu.addEventListener("click", bildHinzu);
    async function bildLoeschen() {
        let daten = new FormData(document.forms[0]);
        let url = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttonLoeschen = document.getElementById("loeschen"); //Button machen auf Admin
    buttonLoeschen.addEventListener("click", bildLoeschen);
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map
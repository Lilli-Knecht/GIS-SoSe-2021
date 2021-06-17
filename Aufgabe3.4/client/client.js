"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    async function datenAbschicken() {
        //Daten abschicken und dann in die MongoDatenbank einspeichern 
        let daten = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        let url = "http://localhost:8100"; //zum lokal testen 
        url += "/abschicken"; //Button abschicken gedrückt 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let jsonObjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //json-String in der Konsole 
    }
    let buttonAbschicken = document.getElementById("abschicken");
    buttonAbschicken.addEventListener("click", datenAbschicken);
    let rueckgabe = document.getElementById("serverausgabe"); //an meine Seite anheften 
    async function datenAnzeigen() {
        let daten = new FormData(document.forms[0]); //Objekt FormData wird generiert
        //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        let url = "http://localhost:8100"; //zum lokal testen 
        url += "/anzeigen"; //Button HTML gedrückt und nun diesen Path mit /html nehmen 
        //nächste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort = await fetch(url); //warten auf url
        let ausgabe = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
    }
    let buttonAnzeigen = document.getElementById("anzeigen");
    buttonAnzeigen.addEventListener("click", datenAnzeigen);
    async function datenLoeschen() {
        //Daten löschen 
        let daten = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        let url = "http://localhost:8100"; //zum lokal testen 
        url += "/loeschen"; //Button abschicken gedrückt 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let jsonObjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //json-String in der Konsole 
    }
    let buttonLoeschen = document.getElementById("loeschen");
    buttonLoeschen.addEventListener("click", datenLoeschen);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map
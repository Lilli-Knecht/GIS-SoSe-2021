"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let rueckgabe = document.getElementById("serverausgabe"); //an meine Seite anheften 
    async function datenSendenHTML() {
        let daten = new FormData(document.forms[0]); //Objekt FormData wird generiert
        let url = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/html"; //Button HTML gedrückt und nun diesen Path mit /html nehmen 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort = await fetch(url); //warten auf url
        let ausgabe = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
    }
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", datenSendenHTML);
    async function datenSendenJSON() {
        let daten = new FormData(document.forms[0]);
        let url = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/json"; //Button JSON gedrückt und nun diesen Path mit /json nehmen 
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let jsonObjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //json-String in der Konsole 
    }
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", datenSendenJSON);
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map
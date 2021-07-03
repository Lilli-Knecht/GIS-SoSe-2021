"use strict";
var Endabgabe;
(function (Endabgabe) {
    //auf welcher Seite befinde ich mich --> wo brauche ich welche Funktionen?
    //Admin.html
    if ((document.querySelector("title").getAttribute("id") == "Admin")) {
        async function anzeigeBilder() {
            let daten = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/kartenAnzeigen"; //Button anzeigen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.json(); //hier auf Antowrt mit Daten warten 
            console.log(ausgabe);
            let anzeigeDiv = document.getElementById("bildanzeige");
            anzeigeDiv.innerHTML = ""; //hier anzeigeDiv leeren bzw immmer überschreiben lassen 
            for (let i = 0; i < ausgabe.length; i++) { //Datenarry durchgehen und alle anzeigen 
                let div = bildkarteInfos(ausgabe[i]);
                anzeigeDiv.appendChild(div);
            }
        }
        let buttonBildanzeige = document.getElementById("anzeigen"); //Button machen auf Admin
        buttonBildanzeige.addEventListener("click", anzeigeBilder);
        function bildkarteInfos(_karte) {
            let karte = document.createElement("div");
            karte.classList.add("bildkarteMitInfo");
            let image = document.createElement("img");
            image.src = _karte.bildurl;
            karte.appendChild(image);
            let name = document.createElement("p");
            name.innerText = _karte.bildname;
            karte.appendChild(name);
            return karte;
        }
        async function bildHinzu() {
            let daten = new FormData(document.forms[1]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/hinzufuegen"; //Button hinzufügen gedrückt 
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
            let daten = new FormData(document.forms[2]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/loeschen"; //Button löschen gedrückt 
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
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map
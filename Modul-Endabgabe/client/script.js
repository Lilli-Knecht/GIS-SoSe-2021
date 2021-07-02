"use strict";
var Endabgabe;
(function (Endabgabe) {
    //auf welcher Seite befinde ich mich, wo brauche ich welche Funktionen 
    //Spiel.html
    if ((document.querySelector("title").getAttribute("id") == "Spiel")) { //hier dann erstellen des Memorys mit den Daten aus der Datenbank
        async function erstellen() {
            let daten = new FormData(document.forms[0]); //Objekt FormData wird generiert
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/spielen";
            //nächste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString(); //in String umwandeln 
            let antwort = await fetch(url); //warten auf url
            let ausgabe = await antwort.json(); //warten auf antwort 
            for (let i = 0; i < 10; i++) { //10 Memorykarten generieren lassen
                let div = bildkarte(ausgabe[Math.floor((Math.random() * (10 - 0 + 1)) + 0)]); //Quelle developer.mpzilla.org
                let div2 = div; //hier für jede Karte zwei divs generieren 
                div.classList.add("zugedeckt");
                div2.classList.add("zugedeckt");
                div.addEventListener("click", aufdecken);
                div2.addEventListener("click", aufdecken);
                document.body.appendChild(div);
                document.body.appendChild(div2);
                //hier noch eine zufällige Position der Divs machen!!!
            }
        }
        let buttonPlay = document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);
        function aufdecken() {
            //hier div dann umdrehen 
        }
    }
    //DeinScore.html
    else if ((document.querySelector("title").getAttribute("id") == "DeinScore")) {
        async function datenEingeben() {
            let daten = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/scoredatenAbgeschickt"; //Button bestaetigen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            console.log(ausgabe);
        }
        let buttonScoredaten = document.getElementById("bestaetigen"); //Button machen auf DeinScore
        buttonScoredaten.addEventListener("click", datenEingeben);
    }
    //Highscore.html
    else if ((document.querySelector("title").getAttribute("id") == "Highscore")) {
        //hier Scoredaten anzeigen mit topZehn und dann nur die besten 10 anzeigen --> durchgehen und in Tabelle schreiben 
        //async function anzeige()
        /*for (let i: number = 0; i < 10; i++) {
            hier in tabelle einspeichern --> jeweils eigene tabellenzeile konfigurieren
        }*/
    }
    //Admin.html
    else if ((document.querySelector("title").getAttribute("id") == "Admin")) {
        async function bildHinzu() {
            let daten = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/hinzufuegen"; //Button hinzufügen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.json();
            console.log(ausgabe);
            for (let i = 0; i < ausgabe.length; i++) { //alle anzeigen 
                let div = bildkarteInfos(ausgabe[i]);
                document.body.appendChild(div);
            }
        }
        let buttonHinzu = document.getElementById("hinzufuegen"); //Button machen auf Admin
        buttonHinzu.addEventListener("click", bildHinzu);
        async function bildLoeschen() {
            let daten = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/loeschen"; //Button löschen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.json();
            console.log(ausgabe);
            for (let i = 0; i < ausgabe.length; i++) { //alle aktualisiert anzeigen 
                let div = bildkarteInfos(ausgabe[i]);
                document.body.appendChild(div);
            }
        }
        let buttonLoeschen = document.getElementById("loeschen"); //Button machen auf Admin
        buttonLoeschen.addEventListener("click", bildLoeschen);
        async function anzeigeBilder() {
            let daten = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/kartenAnzeigen"; //Button löschen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query = new URLSearchParams(daten);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.json();
            console.log(ausgabe);
            let anzeigeDiv = document.getElementById("bildanzeige");
            for (let i = 0; i < ausgabe.length; i++) { //alle anzeigen 
                let div = bildkarteInfos(ausgabe[i]);
                anzeigeDiv.appendChild(div);
            }
        }
        let buttonBildanzeige = document.getElementById("anzeigen"); //Button machen auf Admin
        buttonBildanzeige.addEventListener("click", anzeigeBilder);
    }
    function bildkarte(_auswahl) {
        let div = document.createElement("div");
        div.classList.add("bildkarte");
        let image = document.createElement("img");
        image.src = _auswahl.bildurl;
        div.appendChild(image);
        return div;
    }
    function bildkarteInfos(_karte) {
        let karte = document.createElement("div");
        karte.classList.add("bildkarte");
        let image = document.createElement("img");
        image.src = _karte.bildurl;
        karte.appendChild(image);
        let name = document.createElement("span");
        name.innerText = _karte.bildname;
        karte.appendChild(name);
        return karte;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map
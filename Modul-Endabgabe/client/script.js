"use strict";
var Endabgabe;
(function (Endabgabe) {
    //auf welcher Seite befinde ich mich --> wo brauche ich welche Funktionen?
    //Admin.html
    if ((document.querySelector("title").getAttribute("id") == "Admin")) {
        async function anzeigeBilder() {
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url = "http://localhost:8100"; //zum lokal testen 
            url += "/kartenAnzeigen"; //Button anzeigen gedrückt 
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let antwort = await fetch(url);
            let ausgabe = await antwort.json(); //hier auf Antowrt mit Daten warten 
            console.log(ausgabe);
            let anzeigeDiv = document.getElementById("bildanzeige");
            anzeigeDiv.innerHTML = ""; //hier anzeigeDiv leeren bzw immmer überschreiben lassen 
            for (let i = 0; i < ausgabe.length; i++) { //Datenarray durchgehen und alle anzeigen 
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
            let daten = new FormData(document.forms[0]);
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
            let daten = new FormData(document.forms[1]);
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
    //Spiel.html
    if ((document.querySelector("title").getAttribute("id") == "Spiel")) { //hier dann erstellen des Memorys mit den Daten aus der Datenbank
        let count = 0; //Counter zum Zählen der richtigen Pärchen 
        let date = new Date();
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
            //console.log(ausgabe);
            let spielkarten = []; //hier 10 Pärchen bzw 20 Karten reinspeichern --> zufällig aus der ausgabe generieren lassen 
            for (let i = 0; i < 10; i++) { //10 Memorykarten generieren lassen und doppelt nehmen 
                let auswahl = Math.floor((Math.random() * ((ausgabe.length - 1) - 0 + 1)) + 0); //zufällige Zahl (Größe des ausgabearrays) generieren lassen 
                let karteEins = ausgabe[auswahl];
                let karteZwei = karteEins;
                spielkarten.push(karteEins); //hier in das spielkartenarray eintragen, um später damit weiterzuarbeiten 
                spielkarten.push(karteZwei);
                ausgabe.splice(auswahl, 1); //benutztes Bild aus dem Array entfernen, um Doppelungen zu verhindern 
                //Quelle: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            }
            console.log(spielkarten); //nur Überprüfung 
            //jetzt dann Karten aus spielkartenarray zufällig positionieren 
            position(spielkarten);
            //jetzt noch Zeit messen --> Anfangszeit 
            let spielbeginn = date.getTime(); //getTime in millisekunden 
            sessionStorage.setItem("beginn", spielbeginn.toString());
        }
        let buttonPlay = document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);
        let aufgedeckteKarten = [];
        function aufdecken(_event) {
            let aufgedeckt = _event.target;
            aufgedeckteKarten.push(aufgedeckt);
            aufgedeckt.style.opacity = "100"; //Bild dann anzeigen
            if (aufgedeckteKarten.length == 2) {
                if (aufgedeckteKarten[0].src == aufgedeckteKarten[1].src) {
                    aufgedeckteKarten = []; //Array wieder leeren 
                    count += 1;
                    if (count == 10) { //alle 10 Pärchen gefunden 
                        //Spiel beenden und Zeit stoppen und auf DeinScore weiterleiten 
                        let spielende = date.getTime();
                        sessionStorage.setItem("ende", spielende.toString());
                        let spielzeit = (parseInt(sessionStorage.getItem("ende")) - parseInt(sessionStorage.getItem("beginn"))) / 60; //durch 60 teilen --> Sekunden 
                        sessionStorage.setItem("dauer", spielzeit.toString());
                        count = 0; //Counter wieder auf null setzen 
                        window.location.href = "DeinScore.html"; //Weiterleitung auf DeinScore
                        // bzw. richtige https-Adresse 
                        //Quelle: https://www.w3schools.com/js/js_window_location.asp
                    }
                }
                else {
                    //hier Zeitverzögerung 
                    //zudecken(aufgedeckteKarten);
                    setTimeout(warten, 2000);
                    //Quelle: https://www.w3schools.com/js/js_timing.asp
                }
            }
            else if (aufgedeckteKarten.length > 2) {
                zudecken(aufgedeckteKarten);
            }
        }
        function warten() {
            zudecken(aufgedeckteKarten);
        }
        function zudecken(_aufgedeckt) {
            for (let i = 0; i < _aufgedeckt.length; i++) {
                _aufgedeckt[i].style.opacity = "0";
            }
            aufgedeckteKarten = []; //Array wieder leeren 
        }
        let spielPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //id der Tabellenplätze 
        function position(_spielkarten) {
            _spielkarten.sort(() => .5 - Math.random()); //sortiert das Array zufällig um 
            //Quelle: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            for (let i = 0; i < 20; i++) { //20 mal machen, um alle Karten zu positionieren 
                let karte = bildkarte(_spielkarten[i]);
                let platz = document.getElementById(spielPosition[i].toString()); //hier Tabellenzelle mit zufälliger Position "holen"
                platz.appendChild(karte); //karte in das Feld mit der zufällig generierten Position speichern 
                //eigener Versuch die Bilder zufällig anzuordnen, aber wurde doch nur sortiert zurückgegeben, deshalb dann die .sort in Zeile 175
                /*let positionierung: number = Math.floor((Math.random() * ((spielPosition.length - 1) - 0)) + 0); //Zahl zwischen 0 und 19 (bzw. 19 zählt runter)
                let karte: HTMLImageElement = bildkarte(_spielkarten[positionierung]);

                let platz: HTMLTableDataCellElement = <HTMLTableDataCellElement> document.getElementById(spielPosition[positionierung].toString()); //hier Tabellenzelle mit zufälliger Position "holen"
                platz.appendChild(karte); //karte in das Feld mit der zufällig generierten Position speichern

                spielPosition.splice(positionierung, 1); //benutzte Position/Tabellenzelle aus dem Array entfernen, um Überschreibung zu verhindern
                _spielkarten.splice(positionierung, 1); //verwendetes Bild rausnehmen */
            }
        }
        function bildkarte(_auswahl) {
            let image = document.createElement("img");
            image.classList.add("karte");
            image.src = _auswahl.bildurl;
            image.addEventListener("click", aufdecken); //jeder Karte den Listener geben bzw. jeder Tabellenzelle?
            image.style.opacity = "0"; //Karte noch verstecken 
            return image;
        }
    }
    //DeinScore.html
    else if ((document.querySelector("title").getAttribute("id") == "DeinScore")) {
        let serverAntwort = document.getElementById("serverantwort");
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
            serverAntwort.innerText = ausgabe;
        }
        let zeit = sessionStorage.getItem("dauer");
        let scoreZeit = document.getElementById("zeit");
        scoreZeit.innerText = zeit; //gespeicherte Spielzeit in inputfeld speichern und dann in Anfrage übergeben
        let buttonScoredaten = document.getElementById("bestaetigen"); //Button machen auf DeinScore
        buttonScoredaten.addEventListener("click", datenEingeben);
    }
    //Highscore.html
    else if ((document.querySelector("title").getAttribute("id") == "Highscore")) {
        //hier Scoredaten anzeigen mit topZehn und dann nur die besten 10 anzeigen --> durchgehen und in Tabelle schreiben 
        async function scoresAnzeigen() {
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
            //jetzt aus ausgabe die topZehn rausfiltern --> sortieren Funktion (von klein nach groß (Zeit)) und dann aus dem sortierten Array die ersten Zehn ausgeben 
            sortieren(ausgabe);
            for (let i = 0; i < 10; i++) { //hier werden dann immer nur die ersten 10 rausgezogen --> also die besten 10
                //hier in tabelle einspeichern --> jeweils eigene tabellenzeile konfigurieren 
                let zeile = document.getElementById(i + ""); //immer eine Zeile weiter 
                let div = document.createElement("div");
                let name = document.createElement("span");
                name.innerText = ausgabe[i].name;
                div.appendChild(name);
                let zeit = document.createElement("span");
                zeit.innerText = ausgabe[i].zeit + "";
                div.appendChild(zeit);
                zeile.appendChild(div);
            }
        }
        let buttonScores = document.getElementById("scoreAnzeige"); //Button machen auf DeinScore
        buttonScores.addEventListener("click", scoresAnzeigen);
        function sortieren(_array) {
            let größe = _array.length - 1; //so viele Einträge zum sortieren 
            let zwischenpeicher;
            for (let a = 1; a < größe; a++) {
                for (let b = größe - 1; b >= a; b--) {
                    if (_array[b - 1].zeit > _array[b].zeit) {
                        zwischenpeicher = _array[b - 1];
                        _array[b - 1] = _array[b];
                        _array[b] = zwischenpeicher;
                    }
                }
            }
            return _array;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map
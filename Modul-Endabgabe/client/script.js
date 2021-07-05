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
        if (count == 10) { //alle 10 Pärchen gefunden 
            //Spiel beenden und Zeit stoppen und auf DeinScore weiterleiten 
        }
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
        }
        let buttonPlay = document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);
        //hier dann noch aufdecken und überprüfen 
        //ich muss hier die Karte übergeben, aber wie bei einem eventlistener?
        /*function aufdecken(): void {
            //hier karte dann aufdecken --> style.display ändern
            let karte: HTMLImageElement;
            let karteZwei: HTMLImageElement;
            //dann URL vergleichen
            if (karte.src == karteZwei.src) {
                karte.hidden = false;
                karteZwei.hidden = false;

                count += 1; //Counter hochzählen
            }


        }*/
        let spielPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //id der Tabellenplätze 
        function position(_spielkarten) {
            for (let i = 0; i < 20; i++) { //20 mal machen, um alle Karten zu positionieren 
                let positionierung = Math.floor((Math.random() * ((spielPosition.length - 1) - 0 + 1)) + 0); //Zahl zwischen 0 und 19 (bzw. 19 zählt runter) 
                let karte = bildkarte(_spielkarten[positionierung]);
                let platz = document.getElementById(positionierung.toString()); //hier Tabellenzelle mit zufälliger Position "holen"
                platz.appendChild(karte); //karte in das Feld mit der zufällig generierten Position speichern 
                spielPosition.splice(positionierung, 1); //benutzte Position/Tabellenzelle aus dem Array entfernen, um Überschreibung zu verhindern 
                _spielkarten.splice(positionierung, 1); //verwendetes Bild rausnehmen 
            }
        } //warum macht er das ganze nur einmal?
        function bildkarte(_auswahl) {
            let image = document.createElement("img");
            image.classList.add("karte");
            image.src = _auswahl.bildurl;
            //image.addEventListener("click", aufdecken); //jeder Karte den Listener geben 
            //image.style.display = "none"; //Karte noch verstecken 
            return image;
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
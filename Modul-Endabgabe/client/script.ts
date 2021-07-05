namespace Endabgabe {

    //auf welcher Seite befinde ich mich --> wo brauche ich welche Funktionen?

    //Admin.html
    if ((document.querySelector("title").getAttribute("id") == "Admin" )) {

        async function anzeigeBilder(): Promise<void> {
            let daten: FormData = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/kartenAnzeigen"; //Button anzeigen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: Memorykarte[] = await antwort.json(); //hier auf Antowrt mit Daten warten 
            console.log(ausgabe); 
            

            let anzeigeDiv: HTMLDivElement = <HTMLDivElement> document.getElementById("bildanzeige");
            anzeigeDiv.innerHTML = ""; //hier anzeigeDiv leeren bzw immmer überschreiben lassen 

            for (let i: number = 0; i < ausgabe.length; i++) { //Datenarray durchgehen und alle anzeigen 
                let div: HTMLDivElement = bildkarteInfos(ausgabe[i]); 
                anzeigeDiv.appendChild(div);
            }
        }

        let buttonBildanzeige: HTMLButtonElement = <HTMLButtonElement> document.getElementById("anzeigen"); //Button machen auf Admin
        buttonBildanzeige.addEventListener("click", anzeigeBilder);

        function bildkarteInfos(_karte: Memorykarte): HTMLDivElement { //hier Anzeige der Bildkarten mit Bildname 
            let karte: HTMLDivElement = document.createElement("div");
            karte.classList.add("bildkarteMitInfo");
    
            let image: HTMLImageElement = document.createElement("img");
            image.src = _karte.bildurl; 
            karte.appendChild(image);
    
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerText = _karte.bildname;
            karte.appendChild(name);
    
            return karte;
        }


        async function bildHinzu(): Promise<void> { //Name und URL eingeben und abschicken 
            let daten: FormData = new FormData(document.forms[1]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/hinzufuegen"; //Button hinzufügen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: string = await antwort.text(); 
            console.log(ausgabe); 
    
        }
    
        let buttonHinzu: HTMLButtonElement = <HTMLButtonElement> document.getElementById("hinzufuegen"); //Button machen auf Admin
        buttonHinzu.addEventListener("click", bildHinzu);

        async function bildLoeschen(): Promise<void> { //Name oder ID eingeben und abschicken 
            let daten: FormData = new FormData(document.forms[2]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/loeschen"; //Button löschen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: string = await antwort.text(); 
            console.log(ausgabe); 
    
        }
    
        let buttonLoeschen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("loeschen"); //Button machen auf Admin
        buttonLoeschen.addEventListener("click", bildLoeschen);

    }


    //Spiel.html
    if ((document.querySelector("title").getAttribute("id") == "Spiel" )) { //hier dann erstellen des Memorys mit den Daten aus der Datenbank
        
        async function erstellen(): Promise<void> {
            let daten: FormData = new FormData(document.forms[0]); //Objekt FormData wird generiert
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/spielen"; 

            //nächste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString(); //in String umwandeln 
            let antwort: Response = await fetch(url); //warten auf url
            let ausgabe: Memorykarte[] = await antwort.json(); //warten auf antwort 
            //console.log(ausgabe);
            
            let spielkarten: Memorykarte[] = []; //hier 10 Pärchen bzw 20 Karten reinspeichern --> zufällig aus der ausgabe generieren lassen 

            for (let i: number = 0; i < 10; i++) { //10 Memorykarten generieren lassen und doppelt nehmen 
                let auswahl: number = Math.floor((Math.random() * ((ausgabe.length - 1) - 0 + 1)) + 0); //zufällige Zahl (Größe des ausgabearrays) generieren lassen 
                let karteEins: Memorykarte = ausgabe[auswahl];
                let karteZwei: Memorykarte = karteEins;

                spielkarten.push(karteEins); //hier in das spielkartenarray eintragen, um später damit weiterzuarbeiten 
                spielkarten.push(karteZwei);

                ausgabe = ausgabe.splice(auswahl, 1); //benutztes Bild aus dem Array entfernen, um Doppelungen zu verhindern 
                //Quelle: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

            }

            //jetzt dann Karten aus spielkartenarray zufällig positionieren 
            position(spielkarten);

        }

        let buttonPlay: HTMLButtonElement = <HTMLButtonElement> document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);

        let spielPosition: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //id der Tabellenplätze 

        function position(_spielkarten: Memorykarte[]): void {
            for (let i: number = 0; i < 20; i++) { //20 mal machen, um alle Karten zu positionieren 
                let positionierung: number = Math.floor((Math.random() * ((spielPosition.length - 1) - 0 + 1)) + 0); //Zahl zwischen 0 und 19 (bzw. 19 zählt runter) 
                let karte: HTMLImageElement = bildkarte(_spielkarten[positionierung]);

                let platz: HTMLTableDataCellElement = <HTMLTableDataCellElement> document.getElementById(positionierung.toString());
                platz.appendChild(karte); //karte in das Feld mit der zufällig generierten Position speichern 

                spielPosition = spielPosition.splice(positionierung, 1); //benutzte Position aus dem Array entfernen, um Überschreibung zu verhindern 
                _spielkarten = _spielkarten.splice(positionierung, 1); //verwendetes Bild rausnehmen 
            }
        } //warum macht er das ganze nur einmal?


        function bildkarte(_auswahl: Memorykarte): HTMLImageElement { //hier Anzeige der Bildkarten (nur Bild)
        let image: HTMLImageElement = document.createElement("img");
        image.classList.add("karte");
        image.src = _auswahl.bildurl;

        return image; 
        }

    }

    //DeinScore.html
    else if ((document.querySelector("title").getAttribute("id") == "DeinScore" )) {
        
        async function datenEingeben(): Promise<void> { //Name und Score eingeben und abschicken an Datenbank
            let daten: FormData = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/scoredatenAbgeschickt"; //Button bestaetigen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: string = await antwort.text(); 
            console.log(ausgabe); 
    
        }
    
        let buttonScoredaten: HTMLButtonElement = <HTMLButtonElement> document.getElementById("bestaetigen"); //Button machen auf DeinScore
        buttonScoredaten.addEventListener("click", datenEingeben);
    }

    
    //Highscore.html
    else if ((document.querySelector("title").getAttribute("id") == "Highscore" )) {
        //hier Scoredaten anzeigen mit topZehn und dann nur die besten 10 anzeigen --> durchgehen und in Tabelle schreiben 
        async function scoresAnzeigen(): Promise<void> {
            let daten: FormData = new FormData(document.forms[0]);
            //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/kartenAnzeigen"; //Button anzeigen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: Scoredaten[] = await antwort.json(); //hier auf Antowrt mit Daten warten 
            console.log(ausgabe); 

            //jetzt aus ausgabe die topZehn rausfiltern --> sortieren Funktion (von klein nach groß (Zeit)) und dann aus dem sortierten Array die ersten Zehn ausgeben 
            sortieren(ausgabe);


            for (let i: number = 0; i < 10; i++) { //hier werden dann immer nur die ersten 10 rausgezogen --> also die besten 10
                //hier in tabelle einspeichern --> jeweils eigene tabellenzeile konfigurieren 
                let zeile: HTMLTableDataCellElement = <HTMLTableDataCellElement> document.getElementById(i + ""); //immer eine Zeile weiter 

                let div: HTMLDivElement = <HTMLDivElement> document.createElement("div");
                
                let name: HTMLSpanElement = <HTMLSpanElement> document.createElement("span");
                name.innerText = ausgabe[i].name;
                div.appendChild(name);

                let zeit: HTMLSpanElement = <HTMLSpanElement> document.createElement("span");
                zeit.innerText = ausgabe[i].zeit;
                div.appendChild(zeit);

                zeile.appendChild(div);

            }
        
        }

        let buttonScores: HTMLButtonElement = <HTMLButtonElement> document.getElementById("scoreAnzeige"); //Button machen auf DeinScore
        buttonScores.addEventListener("click", scoresAnzeigen);


        function sortieren(_array: Scoredaten[]): Scoredaten[] {
            let größe: number = _array.length - 1; //so viele Einträge zum sortieren 
            let zwischenpeicher: Scoredaten;
            for (let a: number = 1; a < größe; a++) {
                for (let b: number = größe - 1; b >= a; b--) {
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



    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }

    interface Scoredaten {
        name: string;
        zeit: string;
    }




}
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
                //Quelle: 

                

            }

            //jetzt dann Karten aus spielkartenarray zufällig positionieren 
            position(spielkarten);

        }

        let buttonPlay: HTMLButtonElement = <HTMLButtonElement> document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);

        let spielPosition: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //id der Tabellenplätze 

        function position(_spielkarten: Memorykarte[]): void {
            for (let i: number = 0; i < 20; i++) {
                let positionierung: number = Math.floor((Math.random() * ((spielPosition.length - 1) - 0 + 1)) + 0); //Zahl zwischen 0 und 19 
                let karte: HTMLImageElement = bildkarte(_spielkarten[positionierung]);

                let platz: HTMLTableDataCellElement = <HTMLTableDataCellElement> document.getElementById(positionierung.toString());
                platz.appendChild(karte); //karte in das Feld mit der zufällig generierten Position speichern 

                spielPosition = spielPosition.splice(positionierung, 1); //benutztes Position aus dem Array entfernen, um Überschreibung zu verhindern 
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



    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }



}
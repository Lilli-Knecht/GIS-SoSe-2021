namespace Endabgabe {

    //auf welcher Seite befinde ich mich, wo brauche ich welche Funktionen 

    if ((document.querySelector("title").getAttribute("id") == "Spiel" )) { //hier dann erstellen des Memorys mit den Daten aus der Datenbank
        
        async function erstellen(): Promise<void> {
            let daten: FormData = new FormData(document.forms[0]); //Objekt FormData wird generiert
            let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/erstellen"; 

            //nächste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString(); //in String umwandeln 
            let antwort: Response = await fetch(url); //warten auf url
            let ausgabe: Memorykarte[] = await antwort.json(); //warten auf antwort 

            for (let i: number = 0; i < 10; i++) { //10 Memorykarten generieren lassen
                let div: HTMLDivElement = bildkarte(ausgabe[Math.floor((Math.random() * (10 - 0 + 1)) + 0)]); //Quelle developer.mpzilla.org
                let div2: HTMLDivElement = div; //hier für jede Karte zwei divs generieren 
                document.body.appendChild(div);
                document.body.appendChild(div2);
                //hier noch eine zufällige Position der Divs machen!!!
            }
        }

        let buttonPlay: HTMLButtonElement = <HTMLButtonElement> document.getElementById("spielen"); //Button machen auf DeinScore
        buttonPlay.addEventListener("click", erstellen);

    }

    else if ((document.querySelector("title").getAttribute("id") == "DeinScore" )) {
        
        async function datenEingeben(): Promise<void> { //Name und Score eingeben und abschicken an Datenbank
            let daten: FormData = new FormData(document.forms[0]);
            let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
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
    
    else if ((document.querySelector("title").getAttribute("id") == "Highscore" )) {
        //hier Scoredaten anzeigen mit topZehn und dann nur die besten 10 anzeigen --> durchgehen und in Tabelle schreiben 
        //async function anzeige()

        /*for (let i: number = 0; i < 10; i++) {
            hier in tabelle einspeichern --> jeweils eigene tabellenzeile konfigurieren 
        }*/
    }

    else if ((document.querySelector("title").getAttribute("id") == "Admin" )) {
        
        async function bildHinzu(): Promise<void> { //Name und URL eingeben und abschicken 
            let daten: FormData = new FormData(document.forms[0]);
            let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/hinzufuegen"; //Button hinzufügen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: Memorykarte[] = await antwort.json(); 
            console.log(ausgabe); 

            for (let i: number = 0; i < ausgabe.length; i++) { //alle anzeigen 
                let div: HTMLDivElement = bildkarteInfos(ausgabe[i]); 
                document.body.appendChild(div);
            }
    
        }
    
        let buttonHinzu: HTMLButtonElement = <HTMLButtonElement> document.getElementById("hinzufuegen"); //Button machen auf Admin
        buttonHinzu.addEventListener("click", bildHinzu);
    
        async function bildLoeschen(): Promise<void> { //Name oder ID eingeben und abschicken 
            let daten: FormData = new FormData(document.forms[0]);
            let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
            //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
            url += "/loeschen"; //Button löschen gedrückt 
            
            //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
            //tslint:disable-next-line 
            let query: URLSearchParams = new URLSearchParams(<any>daten);
            url = url + "?" + query.toString();
            let antwort: Response = await fetch(url);
            let ausgabe: Memorykarte[] = await antwort.json(); 
            console.log(ausgabe); 

            for (let i: number = 0; i < ausgabe.length; i++) { //alle aktualisiert anzeigen 
                let div: HTMLDivElement = bildkarteInfos(ausgabe[i]); 
                document.body.appendChild(div);
            }
    
        }
    
        let buttonLoeschen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("loeschen"); //Button machen auf Admin
        buttonLoeschen.addEventListener("click", bildLoeschen);
    }

    function bildkarte(_auswahl: Memorykarte): HTMLDivElement { //hier Anzeige der Bildkarten (nur Bild)
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("bildkarte");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _auswahl.bildurl;
        div.appendChild(image);

        return div; 
    }

    function bildkarteInfos(_karte: Memorykarte): HTMLDivElement { //hier Anzeige der Bildkarten mit Bildname 
        let karte: HTMLDivElement = document.createElement("div");
        karte.classList.add("bildkarte");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _karte.bildurl;
        karte.appendChild(image);

        let name: HTMLSpanElement = document.createElement("span");
        name.innerText = _karte.bildname;
        karte.appendChild(name);

        return karte;
    }

    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }


}
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

            for (let i: number = 0; i < ausgabe.length; i++) { //Datenarry durchgehen und alle anzeigen 
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

    interface Memorykarte {
        bildname: string;
        bildurl: string;
    }



}
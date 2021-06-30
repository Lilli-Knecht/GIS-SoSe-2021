namespace Endabgabe {

    async function datenEingeben(): Promise<void> { //Name und Score eingeben und abschicken an Datenbank
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let ausgabe: string = await antwort.text(); 
        console.log(ausgabe); 

    }

    let buttonScoredaten: HTMLButtonElement = <HTMLButtonElement> document.getElementById("abschicken"); //Button machen auf DeinScore
    buttonScoredaten.addEventListener("click", datenEingeben);

    //bei der hinzufügen auch gleich die Anzeige der DAten mitrein oder eigene Funktion?

    async function bildHinzu(): Promise<void> { //Name und URL eingeben und abschicken 
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        
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
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/scoredatenAbgeschickt"; //Button abschicken gedrückt 
        
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
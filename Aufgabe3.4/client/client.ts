namespace Aufgabe3_4 { //hier Funktionen 

    async function datenAbschicken(): Promise<void> { //Funktion um Daten abzuschicken 
        //Daten abschicken und dann in die MongoDatenbank einspeichern 
        let daten: FormData = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/abschicken"; //Button abschicken gedrückt 
        
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let ausgabe: string = await antwort.text(); 
        console.log(ausgabe); 
    }

    let buttonAbschicken: HTMLButtonElement = <HTMLButtonElement> document.getElementById("abschicken");
    buttonAbschicken.addEventListener("click", datenAbschicken);
    
    let rueckgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("serverausgabe"); //an meine Seite anheften 

    async function datenAnzeigen(): Promise<void> { //Funktion um Daten anzuzeigen
        let daten: FormData = new FormData(document.forms[0]); //Objekt FormData wird generiert
        //let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/anzeigen"; //Button HTML gedrückt und nun diesen Path mit /html nehmen 

        //nächste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort: Response = await fetch(url); //warten auf url
        let ausgabe: string = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
          
    }

    let buttonAnzeigen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("anzeigen");
    buttonAnzeigen.addEventListener("click", datenAnzeigen);

}
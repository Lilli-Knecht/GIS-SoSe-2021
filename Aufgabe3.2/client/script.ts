namespace Aufgabe3_2 {

    let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //an meine Seite anheften 

    async function datenSendenHTML(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]); //Objekt FormData wird generiert
        let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/html"; //Button HTML gedrückt und nun diesen Path mit /html nehmen 

        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort: Response = await fetch(url); //warten auf url
        let ausgabe: string = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
          
    }

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", datenSendenHTML);

    async function datenSendenJSON(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gisombsose2021.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        //let url: RequestInfo = "http://localhost:8100"; //zum lokal testen 
        url += "/json"; //Button JSON gedrückt und nun diesen Path mit /json nehmen 
        
        //näachste Zeile sorgt dafür, dass any nicht mehr unterstrichen wird
        //tslint:disable-next-line 
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let jsonObjekt: Datenobjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //json-String in der Konsole 
    }

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", datenSendenJSON);

    interface Datenobjekt { //interface für Jsonobjekt
        vorname: string;
        nachname: string;
        email: string;
    }
}
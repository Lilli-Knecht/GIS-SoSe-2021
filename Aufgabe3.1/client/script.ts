namespace Aufgabe3_1{

    async function datenSenden(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        console.log(": " + daten.get("name"));
        for (let entry of daten) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }

        let query: URLSearchParams = new URLSearchParams(<any>daten);
        let _url: RequestInfo = "https://gisombsose2021.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let antwort: Response = await fetch(_url);
        let ausgabe: string = await antwort.text();
        console.log(ausgabe);
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //an meine Seite anheften 
        rueckgabe.innerText = ausgabe;
           
    }

    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
    button.addEventListener("click", datenSenden);
}
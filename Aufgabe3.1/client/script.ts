namespace Aufgabe3_1{

    async function datenSenden(_url: RequestInfo): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        console.log(": " + daten.get("name"));
        for (let entry of daten) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }

        let query: URLSearchParams = new URLSearchParams(<any>daten);
        _url = _url + "?" + query.toString();
        console.log(_url);
        let antwort: Response = await fetch(_url);
        console.log(antwort);
           
    }
    datenSenden("https://gisombsose2021.herokuapp.com/");
}
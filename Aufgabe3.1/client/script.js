"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function datenSenden() {
        let daten = new FormData(document.forms[0]);
        console.log(": " + daten.get("name"));
        for (let entry of daten) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }
        let query = new URLSearchParams(daten);
        let _url = "https://gisombsose2021.herokuapp.com/";
        _url = _url + "?" + query.toString();
        console.log(_url);
        let antwort = await fetch(_url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
        let rueckgabe = document.getElementById("serverausgabe"); //an meine Seite anheften 
        rueckgabe.innerText = ausgabe;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", datenSenden);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map
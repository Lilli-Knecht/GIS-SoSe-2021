"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function datenSenden(_url) {
        let daten = new FormData(document.forms[0]);
        console.log(": " + daten.get("name"));
        for (let entry of daten) {
            console.log(entry);
            console.log("name:" + entry[0]);
            console.log("value:" + entry[1]);
        }
        let query = new URLSearchParams(daten);
        _url = _url + "?" + query.toString();
        console.log(_url);
        let antwort = await fetch(_url);
        console.log(antwort);
    }
    datenSenden("https://gisombsose2021.herokuapp.com/");
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map
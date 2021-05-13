"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let meineAuswahl = konvertieren();
    function rumpfDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("rumpf");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let p1 = document.createElement("p");
        p1.innerText = _auswahl.name;
        div.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerText = _auswahl.laenge;
        div.appendChild(p2);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", auswahlGetroffen);
        div.appendChild(button);
        return div;
        function auswahlGetroffen(_event) {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.name);
            console.log("Länge: " + _auswahl.laenge);
            //location.href = "Segel.html"; hier auf nächste Seite verlinken 
        }
    }
    function auswahlRuempfe(_auswahl) {
        let anzeige = document.getElementById("AuswahlanzeigeRümpfe");
        for (let i = 0; i < _auswahl.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
            let div = rumpfDiv(_auswahl[i], i);
            anzeige.appendChild(div);
        }
    }
    //auswahlRuempfe(auswahl.ruempfe); von Aufgabe 2.3 (hier werden die Bilder angezeigt)
    //Aufgabe 1a)
    function konvertieren() {
        let auswahl = JSON.parse(Aufgabe2_4.auswahlJSON);
        return auswahl;
    }
    auswahlRuempfe(meineAuswahl.ruempfe); //hier immer Fehler, aber warum? 
    //Aufgabe 1b) am besten sessionStorage verwenden 
    //Aufgabe 1c) auf nächste Seite verlinken 
    //Aufgabe 1d) Anzeige der bisherigen Auswahl 
    //Aufgabe 2 Seite mit dem fertigen Schiff 
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map
"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 1 
    //Button, der ein weiteres Rechteck hinzufügt
    let buttonHinzu = document.createElement("button");
    buttonHinzu.style.backgroundColor = "green";
    buttonHinzu.style.width = "100px";
    buttonHinzu.style.height = "25px";
    buttonHinzu.innerText = "hinzufügen";
    document.body.appendChild(buttonHinzu);
    buttonHinzu.addEventListener("click", recHinzufuegen);
    function recHinzufuegen(_hinzu) {
        console.log(_hinzu);
        erstelleRec(1);
    }
    //Button, der die Seite zurücksetzt 
    let buttonZurueck = document.createElement("button");
    buttonZurueck.style.backgroundColor = "red";
    buttonZurueck.style.width = "100px";
    buttonZurueck.style.height = "25px";
    buttonZurueck.innerText = "zurücksetzen";
    document.body.appendChild(buttonZurueck);
    buttonZurueck.addEventListener("click", zuruecksetzen);
    function zuruecksetzen(_zurueck) {
        console.log(_zurueck);
        location.href = "index.html";
    }
    //fügt zufällig Rechtecke hinzu (so viele wie Übergabeparameter)
    function erstelleRec(_wieViel) {
        for (let i = 0; i < _wieViel; i++) {
            let div = document.createElement("div");
            div.style.height = ((Math.random() * 200) + 1).toString() + "px";
            div.style.width = ((Math.random() * 200) + 1).toString() + "px";
            div.style.backgroundColor = "blue";
            document.body.appendChild(div);
        }
    }
    erstelleRec(4);
    //Aufgabe 2
    // Thema: Segelschiff
    //a)
    Aufgabe2_3.canvas = document.getElementById("Canvas_Schiff");
    //alle interfaces in der interface.ts
    //alle Daten der Auswahlmöglichkeiten in der data.ts 
    console.log(Aufgabe2_3.alleRuempfe[1]);
    //b) hier alle Daten reinspeichern als ein Objekt (=Schiff)
    //c) Variablen in der data.ts: Unterauswahl in eine Variable 
    //d) Skizze 
    //Aufgabe 3
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map
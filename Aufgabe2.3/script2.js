"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Aufgabe 3
    //a) Startseite und Rumpf.html zuerst hardgecoded und CSS (noch nicht soo schön, aber naja) gemacht
    //b) Daten der Auswahlmöglichkeiten in der data.ts 
    //c) 
    let wellenbrecher = document.getElementById("Auswahl1"); //Button 
    wellenbrecher.addEventListener("click", speichern1);
    let morgenroete = document.getElementById("Auswahl2");
    morgenroete.addEventListener("click", speichern2);
    let arielle = document.getElementById("Auswahl3");
    arielle.addEventListener("click", speichern3);
    //ich weis, dass das nicht elegant gelöst ist, aber ich wusste mir mit den Indizes für die zeigInfo nach Stunden des Ausprobierens nicht mehr zu helfen und so funktioniert es wenigstens 
    function speichern1(_speichern) {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(0);
    }
    function speichern2(_speichern) {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(1);
    }
    function speichern3(_speichern) {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(2);
    }
    function zeigInfo(_index) {
        console.log("Name:" + Aufgabe2_3.alleRuempfe[_index].name);
        console.log("Länge:" + Aufgabe2_3.alleRuempfe[_index].laenge);
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script2.js.map
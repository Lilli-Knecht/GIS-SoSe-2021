"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Rumpfauswahlmoeglichkeiten 
    Aufgabe2_3.alleRuempfe = [];
    let rumpf1 = { laenge: 200, name: "Wellenbrecher", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf1.form.fillRect(10, 300, rumpf1.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf1);
    let rumpf2 = { laenge: 400, name: "Morgenröte", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf2.form.fillRect(250, 300, rumpf2.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf2);
    let rumpf3 = { laenge: 150, name: "Arielle", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf2.form.fillRect(700, 300, rumpf3.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf3);
    //Segelauswahlmoeglichkeiten
    Aufgabe2_3.alleSegel = [];
    let segel1 = { farbe: "yellow", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleSegel.push(segel1);
    let segel2 = { farbe: "black", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleSegel.push(segel2);
    let segel3 = { farbe: "purple", form: Aufgabe2_3.canvas.getContext("2d") };
    Aufgabe2_3.alleSegel.push(segel3);
    //Steuerradauswahlmoeglichkeiten 
    Aufgabe2_3.alleSteuerraeder = [];
    let steuer1 = { form: Aufgabe2_3.canvas.getContext("2d") };
    //steuer1.form.ellipse(); --> Kreis 
    Aufgabe2_3.alleSteuerraeder.push(steuer1);
    let steuer2 = { form: Aufgabe2_3.canvas.getContext("2d") };
    //steuer2.form.  --> dreieck mit beginpath
    Aufgabe2_3.alleSteuerraeder.push(steuer2);
    let steuer3 = { form: Aufgabe2_3.canvas.getContext("2d") };
    //steuer3.form.fillRect();
    Aufgabe2_3.alleSteuerraeder.push(steuer3);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map
"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Rumpfauswahlmoeglichkeiten 
    Aufgabe2_3.canvasRumpf = document.getElementById("Canvas_Rumpf");
    Aufgabe2_3.canvasSegel = document.getElementById("Canvas_Segel");
    Aufgabe2_3.canvasSteuer = document.getElementById("Canvas_Steuer");
    Aufgabe2_3.alleRuempfe = [];
    let rumpf1 = { laenge: 200, name: "Wellenbrecher", form: Aufgabe2_3.canvasRumpf.getContext("2d") };
    rumpf1.form.fillStyle = "brown";
    rumpf1.form.fillRect(10, 150, rumpf1.laenge, 60);
    Aufgabe2_3.alleRuempfe.push(rumpf1);
    let rumpf2 = { laenge: 400, name: "Morgenröte", form: Aufgabe2_3.canvasRumpf.getContext("2d") };
    rumpf2.form.fillStyle = "brown";
    rumpf2.form.fillRect(250, 150, rumpf2.laenge, 60);
    Aufgabe2_3.alleRuempfe.push(rumpf2);
    let rumpf3 = { laenge: 150, name: "Arielle", form: Aufgabe2_3.canvasRumpf.getContext("2d") };
    rumpf3.form.fillStyle = "brown";
    rumpf3.form.fillRect(700, 150, rumpf3.laenge, 60);
    Aufgabe2_3.alleRuempfe.push(rumpf3);
    /*
    hier die konfigurierten anderen Auswahlmöglichkeiten für die Abgaben später
    (diese Woche nur erste Kategorie gefordert, deshalb vorerst auskommentiert)
    //Segelauswahlmoeglichkeiten
    export let alleSegel: Segel[] = [];

    let segel1: Segel = {farbe: "yellow", form: canvasSegel.getContext("2d")};
    segel1.form.fillStyle = "yellow";
    segel1.form.beginPath();
    segel1.form.moveTo(20, 220);
    segel1.form.lineTo(20, 420);
    segel1.form.lineTo(120, 370);
    segel1.form.lineTo(20, 220);
    segel1.form.fill();
    alleSegel.push(segel1);

    let segel2: Segel = {farbe: "green", form: canvasSegel.getContext("2d")};
    segel2.form.fillStyle = "green";
    segel2.form.beginPath();
    segel2.form.moveTo(150, 220);
    segel2.form.lineTo(150, 420);
    segel2.form.lineTo(250, 370);
    segel2.form.lineTo(150, 220);
    segel2.form.fill();
    alleSegel.push(segel2);

    let segel3: Segel = {farbe: "purple", form: canvasSegel.getContext("2d")};
    segel3.form.fillStyle = "purple";
    segel3.form.beginPath();
    segel3.form.moveTo(280, 220);
    segel3.form.lineTo(280, 420);
    segel3.form.lineTo(380, 370);
    segel3.form.lineTo(280, 220);
    segel3.form.fill();
    alleSegel.push(segel3);


    //Steuerradauswahlmoeglichkeiten
    export let alleSteuerraeder: Steuerrad[] = [];

    let steuer1: Steuerrad = {form: canvasSteuer.getContext("2d")}; //steuer1.form.ellipse(); --> Kreis
    steuer1.form.fillStyle = "brown";
    steuer1.form.fillRect(50, 200, 20, 75);
    steuer1.form.fillStyle = "orange";
    steuer1.form.beginPath();
    steuer1.form.ellipse(50, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer1.form.fill();
    alleSteuerraeder.push(steuer1);

    let steuer2: Steuerrad = {form: canvasSteuer.getContext("2d")};
    steuer2.form.fillStyle = "brown";
    steuer2.form.fillRect(100, 200, 20, 75);
    steuer2.form.fillStyle = "red";
    steuer2.form.beginPath();
    steuer2.form.ellipse(100, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer2.form.fill();
    alleSteuerraeder.push(steuer2);

    let steuer3: Steuerrad = {form: canvasSteuer.getContext("2d")};
    steuer3.form.fillStyle = "brown";
    steuer3.form.fillRect(150, 200, 20, 75);
    steuer3.form.fillStyle = "black";
    steuer3.form.beginPath();
    steuer3.form.ellipse(150, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer3.form.fill();
    alleSteuerraeder.push(steuer3);
*/
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map
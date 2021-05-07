"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //Rumpfauswahlmoeglichkeiten 
    Aufgabe2_3.alleRuempfe = [];
    let rumpf1 = { laenge: 200, name: "Wellenbrecher", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf1.form.fillStyle = "brown";
    rumpf1.form.fillRect(10, 300, rumpf1.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf1);
    let rumpf2 = { laenge: 400, name: "Morgenröte", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf2.form.fillStyle = "brown";
    rumpf2.form.fillRect(250, 300, rumpf2.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf2);
    let rumpf3 = { laenge: 150, name: "Arielle", form: Aufgabe2_3.canvas.getContext("2d") };
    rumpf3.form.fillStyle = "brown";
    rumpf3.form.fillRect(700, 300, rumpf3.laenge, 50);
    Aufgabe2_3.alleRuempfe.push(rumpf3);
    //Segelauswahlmoeglichkeiten
    Aufgabe2_3.alleSegel = [];
    let segel1 = { farbe: "yellow", form: Aufgabe2_3.canvas.getContext("2d") };
    segel1.form.fillStyle = "yellow";
    segel1.form.beginPath();
    segel1.form.moveTo(20, 220);
    segel1.form.lineTo(20, 420);
    segel1.form.lineTo(120, 320);
    segel1.form.lineTo(20, 220);
    segel1.form.fill();
    Aufgabe2_3.alleSegel.push(segel1);
    let segel2 = { farbe: "green", form: Aufgabe2_3.canvas.getContext("2d") };
    segel2.form.fillStyle = "green";
    segel2.form.beginPath();
    segel2.form.moveTo(150, 220);
    segel2.form.lineTo(150, 420);
    segel2.form.lineTo(250, 320);
    segel2.form.lineTo(150, 220);
    segel2.form.fill();
    Aufgabe2_3.alleSegel.push(segel2);
    let segel3 = { farbe: "purple", form: Aufgabe2_3.canvas.getContext("2d") };
    segel3.form.fillStyle = "purple";
    segel3.form.beginPath();
    segel3.form.moveTo(280, 220);
    segel3.form.lineTo(280, 420);
    segel3.form.lineTo(380, 320);
    segel3.form.lineTo(280, 220);
    segel3.form.fill();
    Aufgabe2_3.alleSegel.push(segel3);
    //Steuerradauswahlmoeglichkeiten 
    Aufgabe2_3.alleSteuerraeder = [];
    let steuer1 = { form: Aufgabe2_3.canvas.getContext("2d") }; //steuer1.form.ellipse(); --> Kreis 
    steuer1.form.fillStyle = "orange";
    steuer1.form.beginPath();
    steuer1.form.ellipse(10, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer1.form.fill();
    Aufgabe2_3.alleSteuerraeder.push(steuer1);
    let steuer2 = { form: Aufgabe2_3.canvas.getContext("2d") };
    steuer2.form.fillStyle = "rot";
    steuer2.form.beginPath();
    steuer2.form.ellipse(60, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer2.form.fill();
    Aufgabe2_3.alleSteuerraeder.push(steuer2);
    let steuer3 = { form: Aufgabe2_3.canvas.getContext("2d") };
    steuer3.form.fillStyle = "black";
    steuer3.form.beginPath();
    steuer3.form.ellipse(110, 200, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
    steuer3.form.fill();
    Aufgabe2_3.alleSteuerraeder.push(steuer3);
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map
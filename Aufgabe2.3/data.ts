namespace Aufgabe2_3 {
    //Rumpfauswahlmoeglichkeiten 
    export let alleRuempfe: Rumpf[] = [];
    
    let rumpf1: Rumpf = {laenge: 200, name: "Wellenbrecher", form: canvas.getContext("2d")};
    rumpf1.form.fillRect(10, 300, rumpf1.laenge, 50);
    alleRuempfe.push(rumpf1);

    let rumpf2: Rumpf = {laenge: 400, name: "Morgenröte", form: canvas.getContext("2d")};
    rumpf2.form.fillRect(250, 300, rumpf2.laenge, 50);
    alleRuempfe.push(rumpf2);

    let rumpf3: Rumpf = {laenge: 150, name: "Arielle", form: canvas.getContext("2d")};
    rumpf2.form.fillRect(700, 300, rumpf3.laenge, 50);
    alleRuempfe.push(rumpf3);

    //Segelauswahlmoeglichkeiten
    export let alleSegel: Segel[] = [];

    let segel1: Segel = {farbe: "yellow", form: canvas.getContext("2d")};
    alleSegel.push(segel1);

    let segel2: Segel = {farbe: "black", form: canvas.getContext("2d")};
    alleSegel.push(segel2);

    let segel3: Segel = {farbe: "purple", form: canvas.getContext("2d")};
    alleSegel.push(segel3);

    //Steuerradauswahlmoeglichkeiten 
    export let alleSteuerraeder: Steuerrad[] = [];

    let steuer1: Steuerrad = {form: canvas.getContext("2d")};
    //steuer1.form.ellipse(); --> Kreis 
    alleSteuerraeder.push(steuer1);

    let steuer2: Steuerrad = {form: canvas.getContext("2d")};
    //steuer2.form.  --> dreieck mit beginpath
    alleSteuerraeder.push(steuer2);

    let steuer3: Steuerrad = {form: canvas.getContext("2d")};
    //steuer3.form.fillRect();
    alleSteuerraeder.push(steuer3);


}
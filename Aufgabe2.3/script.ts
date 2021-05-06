namespace Aufgabe2_3 {
    //Aufgabe 1 
    //Button, der ein weiteres Rechteck hinzufügt
    let buttonHinzu: HTMLButtonElement = document.createElement("button");
    buttonHinzu.style.backgroundColor = "green";
    buttonHinzu.style.width = "100px";
    buttonHinzu.style.height = "25px";
    buttonHinzu.innerText = "hinzufügen";
    document.body.appendChild(buttonHinzu);
    buttonHinzu.addEventListener("click", recHinzufuegen);

    function recHinzufuegen(_hinzu: Event): void {
        console.log(_hinzu);
        erstelleRec(1);
    }
    
    //Button, der die Seite zurücksetzt 
    let buttonZurueck: HTMLButtonElement = document.createElement("button");
    buttonZurueck.style.backgroundColor = "red";
    buttonZurueck.style.width = "100px";
    buttonZurueck.style.height = "25px";
    buttonZurueck.innerText = "zurücksetzen";
    document.body.appendChild(buttonZurueck);
    buttonZurueck.addEventListener("click", zuruecksetzen);

    function zuruecksetzen(_zurueck: Event): void {
        console.log(_zurueck);
        location.href = "index.html";
    }
    

    //fügt zufällig Rechtecke hinzu (so viele wie Übergabeparameter)
    function erstelleRec(_wieViel: number): void {
        for (let i: number = 0; i < _wieViel; i++) {
            let div: HTMLDivElement = document.createElement("div");
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

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_Schiff");
    
    //alle interfaces in der interface.ts
    //alle Daten der Auswahlmöglichkeiten in der data.ts 

    console.log(alleRuempfe[1]);


    //b) hier alle Daten reinspeichern als ein Objekt (=Schiff)
    

    //c) Variablen in der data.ts: Unterauswahl in eine Variable 



    //d) Skizze 


    //Aufgabe 3






}
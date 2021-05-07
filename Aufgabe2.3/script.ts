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
            div.style.height = ((Math.random() * 50) + 1).toString() + "px";
            div.style.width = ((Math.random() * 100) + 1).toString() + "px";
            div.style.backgroundColor = `rgb(${zufallFarbe().toString()}, ${zufallFarbe().toString()}, ${zufallFarbe().toString()})`;
            document.body.appendChild(div);
        }
    }


    function zufallFarbe(): number {
        let zufall: number = (Math.random() * 255);
        return zufall; 
    }

    erstelleRec(4);

    //Aufgabe 2
    // Thema: Segelschiff
    //a)

    

    
    //alle interfaces in der interface.ts


    //b) hier alle Daten reinspeichern als ein Objekt (=Schiff)
    //auch in der interface.ts
    

    //c) Variablen in der data.ts: Unterauswahl in eine Variable 
    //alle Daten der Auswahlmöglichkeiten in der data.ts 

    console.log(alleRuempfe[0]);


    //d) Skizze 


    //Aufgabe 3






}
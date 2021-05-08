namespace Aufgabe2_3 {
    //Aufgabe 3
    //a) Startseite und Rumpf.html zuerst hardgecoded und CSS (noch nicht soo schön, aber naja) gemacht
    //b) Daten der Auswahlmöglichkeiten in der data.ts 

    //c) 

    let wellenbrecher: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl1"); //Button 
    wellenbrecher.addEventListener("click", speichern1);
    
    let morgenroete: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl2");
    morgenroete.addEventListener("click", speichern2);

    let arielle: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl3");
    arielle.addEventListener("click", speichern3);
    

    //ich weis, dass das nicht elegant gelöst ist, aber ich wusste mir mit den Indizes für die zeigInfo nach Stunden des Ausprobierens nicht mehr zu helfen und so funktioniert es wenigstens 
    function speichern1(_speichern: Event): void {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(0);
    }

    function speichern2(_speichern: Event): void {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(1);
    }

    function speichern3(_speichern: Event): void {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden 
        zeigInfo(2);
    }

    function zeigInfo(_index: number): void {
        console.log("Name:" + alleRuempfe[_index].name);
        console.log("Länge:" + alleRuempfe[_index].laenge);
    }

}


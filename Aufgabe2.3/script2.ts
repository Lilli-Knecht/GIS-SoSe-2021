namespace Aufgabe2_3 {
    //Aufgabe 3
    //a) Startseite und Rumpf.html zuerst hardgecoded und CSS (noch nicht soo schön, aber naja) gemacht
    //b) Daten der Auswahlmöglichkeiten in der data.ts 

    //c) 

    let wellenbrecher: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl1"); //Button 
    wellenbrecher.dataset.name = "Wellenbrecher";
    wellenbrecher.dataset.laenge = "200m";
    wellenbrecher.addEventListener("click", speichern);
    
    let morgenroete: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl2");
    morgenroete.dataset.name = "Morgenröte";
    morgenroete.dataset.laenge = "400m";
    morgenroete.addEventListener("click", speichern);

    let arielle: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Auswahl3");
    arielle.dataset.name = "Arielle";
    arielle.dataset.laenge = "150m";
    arielle.addEventListener("click", speichern);
    

    function speichern(_speichern: Event): void {
        //console.log(_speichern); //hier würde dann der Rumpf in die Konfiguration im Objekt Schiff gespeichert werden (kommt in den folgenden Abgaben)
        //die Auswahl Rumpf würde dann in das Objekt Schiff gespeichert werden, was momentan aber noch einen TSLint-Fehler gibt, das mein Schiff ja auch ein Segel und ein Steuerrad braucht
        console.log(_speichern.target);
        
    }

}


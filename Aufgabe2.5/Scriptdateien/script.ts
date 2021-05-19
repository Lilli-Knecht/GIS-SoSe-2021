namespace Aufgabe2_5 {

    let meineAuswahl: AlleAuswahlmöglichkeiten = konvertieren();

    function rumpfDiv(_auswahl: Rumpf): HTMLDivElement {
        
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("rumpf");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);

        let p1: HTMLSpanElement = document.createElement("p");
        p1.innerText = _auswahl.eigenschaft2;
        div.appendChild(p1);
        
        let p2: HTMLSpanElement = document.createElement("p");
        p2.innerText = _auswahl.eigenschaft1;
        div.appendChild(p2);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", auswahlRumpf);
        div.appendChild(button);

        return div;

        function auswahlRumpf(_event: Event): void {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.eigenschaft2);
            console.log("Länge: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
            sessionStorage.setItem("image1", _auswahl.image); //Bild des ausgewählten Rumpfes speichern 
            sessionStorage.setItem("laengeRumpf", _auswahl.eigenschaft1); //Länge (eigenschaft1) des ausgwähltes Rumpfes speichern
            sessionStorage.setItem("nameRumpf", _auswahl.eigenschaft2); //Name (eigenschaft2) des ausgwähltes Rumpfes speichern
            location.href = "Segel.html"; //1c) hier auf nächste Seite verlinken 
        }
    }

    function schiffteilDiv(_auswahl: Schiffteil): HTMLDivElement { //gilt für Segel und für Steuerrad
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("schiffteil");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);

        let p: HTMLSpanElement = document.createElement("p");
        p.innerText = _auswahl.eigenschaft1;
        div.appendChild(p);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Wählen";
        
        if ((document.querySelector("title").getAttribute("id") == "Seite2" )) {
            button.addEventListener("click", auswahlSegel);
            div.appendChild(button);
            function auswahlSegel(_event: Event): void {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
                sessionStorage.setItem("image2", _auswahl.image); //Bild des ausgewählten Segels speichern 
                sessionStorage.setItem("materialSegel", _auswahl.eigenschaft1); //Material (eigenschaft1) des ausgewählten Segels speichern 
                location.href = "Steuer.html"; //1c) hier auf nächste Seite verlinken 
            }
        }

        if ((document.querySelector("title").getAttribute("id") == "Seite3" )) {
            button.addEventListener("click", auswahlSteuer);
            div.appendChild(button);
            function auswahlSteuer(_event: Event): void {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
                sessionStorage.setItem("image3", _auswahl.image); //Bild des ausgewählten Segels speichern 
                sessionStorage.setItem("holzartSteuer", _auswahl.eigenschaft1); //Holzart (eigenschaft1) des ausgewählten Steuerrads speichern 
                location.href = "Endauswahl.html"; //1c) hier auf nächste Seite verlinken 
            }
        }

        return div;
    }

    function anzeigeKategorie(_auswahl: AlleAuswahlmöglichkeiten): void {
        let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("auswahlanzeige");
        if (document.querySelector("title").getAttribute("id") == "Seite1" ) { //Rumpfseite
            for (let i: number = 0; i < _auswahl.ruempfe.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div: HTMLDivElement = rumpfDiv(_auswahl.ruempfe[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite2" ) { //Segelseite
            for (let i: number = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div: HTMLDivElement = schiffteilDiv(_auswahl.segel[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite3" ) { //Steuerseite
            for (let i: number = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div: HTMLDivElement = schiffteilDiv(_auswahl.steuerraeder[i]);
                anzeige.appendChild(div);
            }
        }   
        
    }


    //Aufgabe 1a) JSON konvertieren 

    function konvertieren(): AlleAuswahlmöglichkeiten {
        let auswahl: AlleAuswahlmöglichkeiten = JSON.parse(auswahlJSON); //hier mit dem fetch arbeiten 
        return auswahl;
    }

    anzeigeKategorie(meineAuswahl); //Auwahl anzeigen lassen 

    //Aufgabe 1b) am besten sessionStorage verwenden 
    //oben in der function auswahlRumpf bzw. auswahlSegel bzw. auswahlSteuer 

    //Aufgabe 1c) auf nächste Seite verlinken siehe Code oben (auswahlRumpf bzw. auswahlSegel bzw. auswahlSteuer)

    //Aufgabe 1d) Anzeige der bisherigen Auswahl 
    //Bild anzeigen 

    if ((document.querySelector("title").getAttribute("id") == "Seite2" ) || (document.querySelector("title").getAttribute("id") == "Seite3" )) {
        let auswahl1: HTMLDivElement = <HTMLDivElement> document.getElementById("rumpfauswahl");
        auswahl1.classList.add("auswahlBisher");
    
        if ((document.querySelector("title").getAttribute("id") == "Seite2" )) { //hier Segelseite (Auswahl Rumpf soll angezeigt werden)
            let auswahlImage: HTMLImageElement = document.createElement("img");
            auswahlImage.src = sessionStorage.getItem("image1");
            auswahl1.appendChild(auswahlImage);
        }

        if ((document.querySelector("title").getAttribute("id") == "Seite3" )) { //hier Steuerradseite (Auswahl Rumpf und Segel sollen angezeigt werden)
            let auswahl2: HTMLDivElement = <HTMLDivElement> document.getElementById("segelauswahl");
            auswahl2.classList.add("auswahlBisher");
            let auswahlImage: HTMLImageElement = document.createElement("img");
            auswahlImage.src = sessionStorage.getItem("image1");
            auswahl1.appendChild(auswahlImage);
            let auswahlImage2: HTMLImageElement = document.createElement("img");
            auswahlImage2.src = sessionStorage.getItem("image2");
            auswahl2.appendChild(auswahlImage2);
        }
    }
    

    //Aufgabe 2 Seite mit dem fertigen Schiff

    if ((document.querySelector("title").getAttribute("id") == "Seite4" )) { //Endauswahl.html
        let meinSchiff: Schiff = { //hier alles in mein Schiff reinspeichern
            rumpf: {image: sessionStorage.getItem("image1"), eigenschaft1: sessionStorage.getItem("laengeRumpf"), eigenschaft2: sessionStorage.getItem("nameRumpf")},
            segel: {image: sessionStorage.getItem("image2"), eigenschaft1: sessionStorage.getItem("materialSegel")},
            steuerrad: {image: sessionStorage.getItem("image3"), eigenschaft1: sessionStorage.getItem("holzartSteuer")}
        };

        let schiff: HTMLDivElement = <HTMLDivElement> document.getElementById("fertigesSchiff");
        schiff.classList.add("meinSchiff");

        let rumpf: HTMLImageElement = document.createElement("img");
        rumpf.src = meinSchiff.rumpf.image;
        schiff.appendChild(rumpf);

        let segel: HTMLImageElement = document.createElement("img");
        segel.src = meinSchiff.segel.image;
        schiff.appendChild(segel);

        let steuer: HTMLImageElement = document.createElement("img");
        steuer.src = meinSchiff.steuerrad.image;
        schiff.appendChild(steuer);

        let info: HTMLParagraphElement = <HTMLDivElement> document.getElementById("info");
        info.innerText = "Name: " + meinSchiff.rumpf.eigenschaft2 + "; Länge: " + meinSchiff.rumpf.eigenschaft1 + "; Segelmaterial: " + meinSchiff.segel.eigenschaft1 + "; Steuerrad-Holzart: " + meinSchiff.steuerrad.eigenschaft1;
    }
    
}
"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let meineAuswahl = konvertieren();
    function rumpfDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("rumpf");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let p1 = document.createElement("p");
        p1.innerText = _auswahl.eigenschaft2;
        div.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerText = _auswahl.eigenschaft1;
        div.appendChild(p2);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        button.addEventListener("click", auswahlRumpf);
        div.appendChild(button);
        return div;
        function auswahlRumpf(_event) {
            console.log("Ihre Auswahl:");
            console.log("Name: " + _auswahl.eigenschaft2);
            console.log("Länge: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
            sessionStorage.setItem("image1", _auswahl.image); //Bild des ausgewählten Rumpfes speichern 
            location.href = "Segel.html"; //1c) hier auf nächste Seite verlinken 
        }
    }
    function anzeigeKategorie(_auswahl) {
        let anzeige = document.getElementById("auswahlanzeige");
        if (document.querySelector("title").getAttribute("id") == "Seite1") { //Rumpfseite
            for (let i = 0; i < _auswahl.ruempfe.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = rumpfDiv(_auswahl.ruempfe[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite2") { //Segelseite
            for (let i = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = schiffteilDiv(_auswahl.segel[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite3") { //Steuerseite
            for (let i = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = schiffteilDiv(_auswahl.steuerraeder[i], i);
                anzeige.appendChild(div);
            }
        }
    }
    function schiffteilDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("schiffteil");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let p = document.createElement("p");
        p.innerText = _auswahl.eigenschaft1;
        div.appendChild(p);
        let button = document.createElement("button");
        button.innerText = "Wählen";
        if ((document.querySelector("title").getAttribute("id") == "Seite2")) {
            button.addEventListener("click", auswahlSegel);
            div.appendChild(button);
            function auswahlSegel(_event) {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
                sessionStorage.setItem("image2", _auswahl.image); //Bild des ausgewählten Segels speichern 
                location.href = "Steuer.html"; //1c) hier auf nächste Seite verlinken 
            }
        }
        if ((document.querySelector("title").getAttribute("id") == "Seite3")) {
            button.addEventListener("click", auswahlSteuer);
            div.appendChild(button);
            function auswahlSteuer(_event) {
                console.log("Ihre Auswahl:");
                console.log("Name: " + _auswahl.eigenschaft1); //Auskunft noch als Überprüfung dringelassen 
                sessionStorage.setItem("image3", _auswahl.image); //Bild des ausgewählten Segels speichern 
                location.href = "Endauswahl.html"; //1c) hier auf nächste Seite verlinken 
            }
        }
        return div;
    }
    //auswahlRuempfe(auswahl.ruempfe); von Aufgabe 2.3 (hier werden die Bilder angezeigt)
    //Aufgabe 1a) JSON konvertieren 
    function konvertieren() {
        let auswahl = JSON.parse(Aufgabe2_4.auswahlJSON);
        return auswahl;
    }
    anzeigeKategorie(meineAuswahl); //Auwahl anzeigen lassen 
    //Aufgabe 1b) am besten sessionStorage verwenden 
    //oben in der function auswahlRumpf bzw. auswahlSegel bzw. auswahlSteuer 
    //Aufgabe 1c) auf nächste Seite verlinken siehe Code oben 
    //Aufgabe 1d) Anzeige der bisherigen Auswahl 
    //Wert wieder anzeigen lassen: getItem 
    let bisherigeAuswahl = document.getElementById("bisherigeAuswahl");
    bisherigeAuswahl.classList.add("auswahlBisher");
    if ((document.querySelector("title").getAttribute("id") == "Seite2")) { //hier Segelseite (Auswahl Rumpf soll angezeigt werden)
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
    }
    if ((document.querySelector("title").getAttribute("id") == "Seite3")) { //hier Steuerradseite (Auswahl Rumpf und Segel sollen angezeigt werden)
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
    }
    if ((document.querySelector("title").getAttribute("id") == "Seite4")) { //hier Endauswahlseite (hier alles Auswahlmöglichleiten)
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("image1");
        bisherigeAuswahl.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("image2");
        bisherigeAuswahl.appendChild(auswahlImage2);
        let auswahlImage3 = document.createElement("img");
        auswahlImage3.src = sessionStorage.getItem("image3");
        bisherigeAuswahl.appendChild(auswahlImage3);
    }
    //Aufgabe 2 Seite mit dem fertigen Schiff 
    //Endauswahl.html hier noch mein Schiff interface benutzen
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map
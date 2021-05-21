"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    //b) 
    async function datenEinlesen(_url) {
        let antwort = await fetch(_url);
        console.log("Response", antwort);
        let daten = await antwort.json();
        anzeigeKategorie(daten);
    }
    datenEinlesen("https://lilli-knecht.github.io/GIS-SoSe-2021/Aufgabe2.5/data.json");
    function rumpfDiv(_auswahl) {
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
            sessionStorage.setItem("laengeRumpf", _auswahl.eigenschaft1); //Länge (eigenschaft1) des ausgwähltes Rumpfes speichern
            sessionStorage.setItem("nameRumpf", _auswahl.eigenschaft2); //Name (eigenschaft2) des ausgwähltes Rumpfes speichern
            location.href = "Segel.html"; //1c) hier auf nächste Seite verlinken 
        }
    }
    function schiffteilDiv(_auswahl) {
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
                sessionStorage.setItem("materialSegel", _auswahl.eigenschaft1); //Material (eigenschaft1) des ausgewählten Segels speichern 
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
                sessionStorage.setItem("holzartSteuer", _auswahl.eigenschaft1); //Holzart (eigenschaft1) des ausgewählten Steuerrads speichern 
                location.href = "Endauswahl.html"; //1c) hier auf nächste Seite verlinken 
            }
        }
        return div;
    }
    function anzeigeKategorie(_auswahl) {
        let anzeige = document.getElementById("auswahlanzeige");
        if (document.querySelector("title").getAttribute("id") == "Seite1") { //Rumpfseite
            for (let i = 0; i < _auswahl.ruempfe.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = rumpfDiv(_auswahl.ruempfe[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite2") { //Segelseite
            for (let i = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = schiffteilDiv(_auswahl.segel[i]);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Seite3") { //Steuerseite
            for (let i = 0; i < _auswahl.segel.length; i++) { //dynamisch Auswahlmöglichkeiten anzeigen lassen 
                let div = schiffteilDiv(_auswahl.steuerraeder[i]);
                anzeige.appendChild(div);
            }
        }
    }
    if ((document.querySelector("title").getAttribute("id") == "Seite2") || (document.querySelector("title").getAttribute("id") == "Seite3")) {
        let auswahl1 = document.getElementById("rumpfauswahl");
        auswahl1.classList.add("auswahlBisher");
        if ((document.querySelector("title").getAttribute("id") == "Seite2")) { //hier Segelseite (Auswahl Rumpf soll angezeigt werden)
            let auswahlImage = document.createElement("img");
            auswahlImage.src = sessionStorage.getItem("image1");
            auswahl1.appendChild(auswahlImage);
        }
        if ((document.querySelector("title").getAttribute("id") == "Seite3")) { //hier Steuerradseite (Auswahl Rumpf und Segel sollen angezeigt werden)
            let auswahl2 = document.getElementById("segelauswahl");
            auswahl2.classList.add("auswahlBisher");
            let auswahlImage = document.createElement("img");
            auswahlImage.src = sessionStorage.getItem("image1");
            auswahl1.appendChild(auswahlImage);
            let auswahlImage2 = document.createElement("img");
            auswahlImage2.src = sessionStorage.getItem("image2");
            auswahl2.appendChild(auswahlImage2);
        }
    }
    if ((document.querySelector("title").getAttribute("id") == "Seite4")) { //Endauswahl.html
        let meinSchiff = {
            rumpf: { image: sessionStorage.getItem("image1"), eigenschaft1: sessionStorage.getItem("laengeRumpf"), eigenschaft2: sessionStorage.getItem("nameRumpf") },
            segel: { image: sessionStorage.getItem("image2"), eigenschaft1: sessionStorage.getItem("materialSegel") },
            steuerrad: { image: sessionStorage.getItem("image3"), eigenschaft1: sessionStorage.getItem("holzartSteuer") }
        };
        let schiff = document.getElementById("fertigesSchiff");
        schiff.classList.add("meinSchiff");
        let rumpf = document.createElement("img");
        rumpf.src = meinSchiff.rumpf.image;
        schiff.appendChild(rumpf);
        let segel = document.createElement("img");
        segel.src = meinSchiff.segel.image;
        schiff.appendChild(segel);
        let steuer = document.createElement("img");
        steuer.src = meinSchiff.steuerrad.image;
        schiff.appendChild(steuer);
        let info = document.getElementById("info");
        info.innerText = "Name: " + meinSchiff.rumpf.eigenschaft2 + "; Länge: " + meinSchiff.rumpf.eigenschaft1 + "; Segelmaterial: " + meinSchiff.segel.eigenschaft1 + "; Steuerrad-Holzart: " + meinSchiff.steuerrad.eigenschaft1;
        //c) Funktion, welche Daten an die URL übergibt und Antwort erhält 
        async function datenSchicken(_url) {
            let query = new URLSearchParams(sessionStorage);
            _url = _url + "?" + query.toString();
            let antwort = await fetch(_url);
            let ausgabe = await antwort.text();
            let rueckgabe = document.getElementById("serverausgabe"); //an meine Seite anheften 
            rueckgabe.innerText = ausgabe;
            if (ausgabe.match("message")) { //hier Formatierung 
                rueckgabe.style.color = "green";
            }
            else {
                rueckgabe.style.color = "red";
            }
        }
        datenSchicken("https://gis-communication.herokuapp.com");
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map
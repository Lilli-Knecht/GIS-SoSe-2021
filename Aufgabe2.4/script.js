"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function rumpfDiv(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("rumpf");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
        let span1 = document.createElement("span");
        span1.innerText = _auswahl.name;
        div.appendChild(span1);
        let span2 = document.createElement("span");
        span2.innerText = _auswahl.laenge;
        div.appendChild(span2);
        let button = document.createElement("button");
        button.innerText = "Wahl";
        button.addEventListener("click", auswahlGetroffen);
        div.appendChild(button);
        return div;
        function auswahlGetroffen(_event) {
            console.log(_auswahl);
        }
    }
    /*function auswahlAnzeigen(_auswahl: Rumpf[]): void {
        let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("Auswahlanzeige");
        for (let i: number = 0; i < _auswahl.length; i++) {
            let div: HTMLDivElement = createPartDiv(_auswahl[i], i);
            anzeige.appendChild(div);
        }
    }

    auswahlAnzeigen(auswahl.ruempfe);*/
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map
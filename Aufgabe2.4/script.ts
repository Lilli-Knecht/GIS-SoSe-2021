namespace Aufgabe2_4 {
    function rumpfDiv(_auswahl: Rumpf, _index: number): HTMLDivElement {
        
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("rumpf");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);

        let span1: HTMLSpanElement = document.createElement("span");
        span1.innerText = _auswahl.name;
        div.appendChild(span1);
        
        let span2: HTMLSpanElement = document.createElement("span");
        span2.innerText = _auswahl.laenge;
        div.appendChild(span2);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Wahl";
        button.addEventListener("click", auswahlGetroffen);
        div.appendChild(button);

        return div;

        function auswahlGetroffen(_event: Event): void {
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
}
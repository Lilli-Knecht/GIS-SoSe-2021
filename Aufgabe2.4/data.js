"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /*export let auswahl: AlleAuswahlmöglichkeiten = { //Speichern in eine einzige Variable aus Aufgabe 2.3
        ruempfe: [
            {image: "Bilddateien/Wellenbrecher.PNG", laenge: "200m", name: "Wellenbrecher"},
            {image: "Bilddateien/Morgenröte.PNG", laenge: "400m", name: "Morgenröte"},
            {image: "Bilddateien/Arielle.PNG", laenge: "150m", name: "Arielle"}
        ],
        segel: [
            {image: "Bilddateien/Segel_pink.PNG", material: "Dacron-Gewebe"},
            {image: "Bilddateien/Segel_orange.PNG", material: "Cruising-Laminat"},
            {image: "Bilddateien/Segel_grün.PNG", material: "Custom_Laminat"}
        ],
        steuerraeder: [
            {image: "Bilddateien/Steuer_schwarz.PNG", holzart: "Schwarzholz"},
            {image: "Bilddateien/Steuer_braun.PNG", holzart: "Eiche"},
            {image: "Bilddateien/Steuer_grau.PNG", holzart: "Fichte"}
        ]
    };*/
    //Aufgabe 1a)
    Aufgabe2_4.auswahlJSON = `
        {
            "ruempfe": [
                {
                    "image": "Bilddateien/Wellenbrecher.PNG", "eigenschaft1": "200m", "eigenschaft2": "Wellenbrecher"
                },
                {
                    "image": "Bilddateien/Morgenröte.PNG", "eigenschaft1": "400m", "eigenschaft2": "Morgenröte"
                },
                {
                    "image": "Bilddateien/Arielle.PNG", "eigenschaft1": "150m", "eigenschaft2": "Arielle"
                }
            ],
            "segel": [
                {
                    "image": "Bilddateien/Segel_pink.PNG", "eigenschaft1": "Dacron-Gewebe"
                },
                {
                    "image": "Bilddateien/Segel_orange.PNG", "eigenschaft1": "Cruising-Laminat"
                },
                {
                    "image": "Bilddateien/Segel_grün.PNG", "eigenschaft1": "Custom-Laminat"
                }
            ],
            "steuerraeder": [
                {
                    "image": "Bilddateien/Steuer_schwarz.PNG", "eigenschaft1": "Schwarzholz"
                },
                {
                    "image": "Bilddateien/Steuer_braun.PNG", "eigenschaft1": "Eiche"
                },
                {
                    "image": "Bilddateien/Steuer_grau.PNG", "eigenschaft1": "Fichte"
                }
            ]
        }
        `;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map
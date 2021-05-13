namespace Aufgabe2_4 {
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

    export let auswahlJSON: string = 
        `
        {
            "ruempfe": [
                {
                    "image": "Bilddateien/Wellenbrecher.PNG", "laenge": "200m", "name": "Wellenbrecher"
                },
                {
                    "image": "Bilddateien/Morgenröte.PNG", "laenge": "400m", "name": "Morgenröte"
                },
                {
                    "image": "Bilddateien/Arielle.PNG", "laenge": "150m", "name": "Arielle"
                }
            ],
            "segel": [
                {
                    "image": "Bilddateien/Segel_pink.PNG", "material": "Dacron-Gewebe"
                },
                {
                    "image": "Bilddateien/Segel_orange.PNG", "material": "Cruising-Laminat"
                },
                {
                    "image": "Bilddateien/Segel_grün.PNG", "material": "Custom_Laminat"
                }
            ],
            "steuerraeder": [
                {
                    "image": "Bilddateien/Steuer_schwarz.PNG", "holzart": "Schwarzholz"
                },
                {
                    "image": "Bilddateien/Steuer_braun.PNG", "holzart": "Eiche"
                },
                {
                    "image": "Bilddateien/Steuer_grau.PNG", "holzart": "Fichte"
                }
            ]
        }
        `
    ;
        
}

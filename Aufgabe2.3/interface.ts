namespace Aufgabe2_3 {
    export interface Schiff {
        rumpf: Rumpf;
        segel: Segel;
        steuerrad: Steuerrad;
    }

    export interface Rumpf { 
        laenge: number;
        name: string;
        form: CanvasRenderingContext2D; //immer ein Rechteck

    }

    export interface Segel {
        farbe: string;
        form: CanvasRenderingContext2D; //immer ein Dreieck 

    }

    export interface Steuerrad {
        form: CanvasRenderingContext2D; //hier unterschiedlich, je nach Auswahl (Kreis, Dreieck und Rechteck)
    }
}
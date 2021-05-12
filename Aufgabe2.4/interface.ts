namespace Aufgabe2_4 { //die Interfaces
    export interface Schiff {
        rumpf: Rumpf;
        segel: Segel;
        steuerrad: Steuerrad;
    }

    export interface AlleAuswahlmöglichkeiten {
        ruempfe: Rumpf[];
        segel: Segel[];
        steuerraeder: Steuerrad[];
    }

    export interface Rumpf { 
        image: string;
        name: string; 
        laenge: string;
    }

    export interface Segel {
        image: string;
        material: string;

    }

    export interface Steuerrad {
        image: string;
        holzart: string;
    }
}
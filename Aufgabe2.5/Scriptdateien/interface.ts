namespace Aufgabe2_5 { //die Interfaces
    export interface Schiff {
        rumpf: Rumpf;
        segel: Schiffteil;
        steuerrad: Schiffteil;
    }

    export interface AlleAuswahlmöglichkeiten {
        ruempfe: Rumpf[];
        segel: Schiffteil[];
        steuerraeder: Schiffteil[];
    }

    export interface Schiffteil { //Segel und Steuerrad 
        image: string;
        eigenschaft1: string;
    }

    export interface Rumpf extends Schiffteil { 
        eigenschaft2: string;
    }
}
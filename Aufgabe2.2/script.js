"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    //Aufgabe 1 - Mehr "langweilige Konsolenausgaben"
    console.log("Aufgabe 1");
    //a)
    console.log("a)");
    console.log(min(23, 45, 35, 96, 2, 47, 7, -4, 1));
    function min(..._num) {
        let minimum = _num[0];
        for (let i = 0; i < _num.length; i++) {
            if (_num[i] < minimum) {
                minimum = _num[i];
            }
        }
        return minimum;
    }
    //b)
    console.log("b)");
    /*console.log("mit 50");
    console.log(isEven(50));
    console.log("mit 75");
    console.log(isEven(75));
    function isEven(_num1: number): boolean {
        let istgerade: boolean;
        if (_num1 == 0) {
            istgerade = true;
        }
        else if (_num1 == 1) {
            istgerade = false;
        }
        else {
            isEven(_num1 - 2);
        }
        return istgerade;
    }*/
    // Was passiert bei -1? 
    //c)
    console.log("c)");
    //2.
    let studi1 = { name: "Müller", vorname: "Max", matrikelnummer: 123456 };
    let studi2 = { name: "Schneider", vorname: "Anna", matrikelnummer: 789123 };
    let studi3 = { name: "Maier", vorname: "Alex", matrikelnummer: 456789 };
    //3.
    let studirendenArray = [];
    studirendenArray.push(studi1);
    studirendenArray.push(studi2);
    studirendenArray.push(studi3);
    studirendenArray.push({ name: "Schmid", vorname: "Emma", matrikelnummer: 135791 });
    console.log(studi1.name);
    console.log(studi1.matrikelnummer);
    console.log(studi2.vorname);
    console.log(studi3.vorname);
    console.log(studi3.name);
    console.log(studirendenArray[3].name);
    console.log(studirendenArray[3].matrikelnummer);
    //4. Übergabeparameter einzeln gewählt, da in der Aufgabe stand ...mit geeigneten Übergabeparametern (sonst hätte ich den Student als Übergabeparameter benutzt)
    for (let i = 0; i < studirendenArray.length; i++) {
        showInfo(studirendenArray[i].name, studirendenArray[i].vorname, studirendenArray[i].matrikelnummer);
    }
    function showInfo(_name, _vorname, _matrikelnummer) {
        console.log("Name:" + _name);
        console.log("Vorname:" + _vorname);
        console.log("Matrikelnummer:" + _matrikelnummer);
    }
    //5. auskommentiert, da nicht verwendet 
    /*class StudierendeR {
        name: string;
        vorname: string;
        matrikelnummer: number;

        constructor(_name: string, _vorname: string, _matrikelnummer: number) {
            this.name = _name;
            this.vorname = _vorname;
            this.matrikelnummer = _matrikelnummer;
        }

        showInfo(): void {
            console.log(this.name, this.vorname, this.matrikelnummer);
        }
    }*/
    //Aufgabe 2 - Arrays
    console.log("Aufgabe 2");
    //a)
    console.log("a)");
    /*let array1: number[] = [1, 2, 3, 4, 5, 6];
    console.log(backwards(array1));

    function backwards(_array: number[]): number[] {
        let arraybackwards: number[] = _array;
        let zwischenspeicher: number;
        for (let i: number = 0; i < arraybackwards.length; i++) {
            zwischenspeicher = arraybackwards[i];
            arraybackwards[i] = arraybackwards[arraybackwards.length - 1];
            arraybackwards[i + 1] = zwischenspeicher;
        }
        return arraybackwards;
    }*/
    //b)
    console.log("b)");
    //c)
    console.log("c)");
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map
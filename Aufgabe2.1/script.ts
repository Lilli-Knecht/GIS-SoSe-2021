//Aufgabe 1 - Basics
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("klar?");
}

function func2(): void {
    console.log("Logo!");
}


/*a) unzulässig wären Dopplungen von Variablennamen, Leerzeichen im Namen. Unerwünscht sind Großbuchstaben am Anfang und Umlaute.
b) debugger
c) siehe oben im Code */

//Aufgabe 2 - Kontinuierliche Variablenmanipulation
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();

/*In der Konsole wird von 9 auf 1 runtergezählt. Dia Variable i wird auf 9 gesetzt. Dann wird i in der Konsole ausgegeben. Danach wird i um
1 verringert und überspeichert. Solange die Bedingung i > 0 erfüllt ist, wird der Vorgang wiederholt.*/

/*Aufgabe 3 - - Fehler erkennen und vermeiden lernen
a)Fehlermeldungen werden recht gut "erklärt". Benutzt man eine Varibale, die in einem lokalen Kontext nicht existiert, dann wird sie nicht gefunden.
Auch bei Doppelungen von Variablennamen wird die nicht genehmigte Doppelung angezeigt.
*/

//Aufgabe 4 - Gobal vs Lokal (Namen der Funktionen wegen Doppelung geändert)
let x: string = "Hallo";
console.log(x);
func3(x);
console.log(x);
func4();
func5();
console.log(x);

function func3(y: string): void {
    y = "Bla";
    console.log(y);
}

function func4(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func5(): void {
    x = "Test";
}

/*a) Ausgabe: Hallo Bla Hallo Blubb Test
b) Unterschied lokal und global: lokale Varibalen "leben" nur innerhalb der geschweiften Klammern/einer Funktion und können globale Varibalen überschreiben.
globale Variablen liegen eine Ebene über den lokalen Variablen. 
Übergabeparameter: Sind Varibalen, die man Funktionen übergeben kann, mit denen sie dann arbeiten und diese auch verändern kann.
normale Variable vs. Funktionen: Variablen speichern den Typ und einen Wert. Funktionen können mehrere VAriablen enthalten und mit diesen arbeiten.
Beide geben von sich aus nichts zurück, sondern speichern nur Werte, man muss die Anweisung einer Rückgabe definieren.
*/

//Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
//a)
let zahl1: number = 2;
let zahl2: number = 5;
multiply(zahl1, zahl2);

function multiply(a: number, b: number): void {
    let ergebnis: number = a * b;
    console.log(ergebnis);
}

//b)
max(zahl1, zahl2);

function max(a: number, b: number): void {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}

//c)
multiply1to100();

function multiply1to100(): void {
    let i: number = 1;
    let result: number = 0;

    do {
        result = result + i;
        i = i + 1;
    } while ( i < 101);
    console.log(result);
}

//d)
//for (let i: number = 0; i < 10; i++) {
    //console.log(Math.random);
//}

//e)
let zahl: number = 5;
factorial(zahl);

function factorial(n: number): void {
    let fakultaet: number = n;
    if (n > 1) {
        do {
            fakultaet = fakultaet * (n - 1);
            n = n - 1;
        } while ( n > 1);
    }
    else {
        fakultaet = 1;
    }
    console.log(fakultaet);
}

//f)
leapyears();

function leapyears(): void {
    let jahr: number = 1900;
    for (jahr; jahr < 2022; jahr++) {
        if (jahr % 4 == 0 && jahr % 100 !== 0 || jahr % 400 == 0) {
            console.log(jahr);
        }
    
    }
}




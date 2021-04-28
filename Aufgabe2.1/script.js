"use strict";
//Aufgabe 1 - Basics
console.log("Aufgabe 1:");
function a1() {
    let x = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}
a1();
function func1() {
    console.log("klar?");
}
function func2() {
    console.log("Logo!");
}
/*a) unzulässig wären Dopplungen von Variablennamen, Leerzeichen im Namen. Unerwünscht sind Großbuchstaben am Anfang und Umlaute.
b) debugger
c) siehe oben im Code */
//Aufgabe 2 - Kontinuierliche Variablenmanipulation
console.log("Aufgabe 2:");
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*In der Konsole wird von 9 auf 1 runtergezählt. Dia Variable i wird auf 9 gesetzt. Dann wird i in der Konsole ausgegeben. Danach wird i um
1 verringert und überspeichert. Solange die Bedingung i > 0 erfüllt ist, wird der Vorgang wiederholt.*/
/*Aufgabe 3 - - Fehler erkennen und vermeiden lernen
a)Fehlermeldungen werden recht gut "erklärt". Benutzt man eine Varibale, die in einem lokalen Kontext nicht existiert, dann wird sie nicht gefunden.
Auch bei Doppelungen von Variablennamen wird die nicht genehmigte Doppelung angezeigt.
*/
//Aufgabe 4 - Gobal vs Lokal (Namen der Funktionen wegen Doppelung geändert)
console.log("Aufgabe 4:");
let x = "Hallo";
console.log(x);
func3(x);
console.log(x);
func4();
func5();
console.log(x);
function func3(y) {
    y = "Bla";
    console.log(y);
}
function func4() {
    let x = "Blubb";
    console.log(x);
}
function func5() {
    x = "Test";
}
/*a) Ausgabe: Hallo Bla Hallo Blubb Test
b) Unterschied lokal und global: lokale Variablen "leben" nur innerhalb der geschweiften Klammern/einer Funktion und können globale Varibalen überschreiben.
globale Variablen liegen eine Ebene über den lokalen Variablen. Auf globale Variablen kann von überall zugegriffen werden, eine lokale Variable ist nur innerhalb der Funktion (o.Ä.) zugreifbar.
Übergabeparameter: Sind Varibalen, die man Funktionen übergeben kann, mit denen sie dann arbeiten und diese auch verändern kann.
normale Variable vs. Funktionen: Variablen speichern den Typ und einen Wert. Funktionen können mehrere VAriablen enthalten und mit diesen arbeiten.
Beide geben von sich aus nichts zurück, sondern speichern nur Werte, man muss die Anweisung einer Rückgabe definieren.
*/
//Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
console.log("Aufgabe 5:");
//a)
console.log("a)");
let zahl1 = 2;
let zahl2 = 5;
multiply(zahl1, zahl2);
function multiply(a, b) {
    let ergebnis = a * b;
    console.log(ergebnis);
}
//b)
console.log("b)");
max(zahl1, zahl2);
function max(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
//c)
console.log("c)");
multiply1to100();
function multiply1to100() {
    let i = 1;
    let result = 0;
    do {
        result = result + i;
        i = i + 1;
    } while (i < 101);
    console.log(result);
}
//d)
console.log("d)");
for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 100) + 1);
}
//e)
console.log("e)");
let zahl = 5;
factorial(zahl);
function factorial(n) {
    let fakultaet = n;
    if (n > 1) {
        do {
            fakultaet = fakultaet * (n - 1);
            n = n - 1;
        } while (n > 1);
    }
    else {
        fakultaet = 1;
    }
    console.log(fakultaet);
}
//f)
console.log("f)");
leapyears();
function leapyears() {
    let jahr = 1900;
    for (jahr; jahr < 2022; jahr++) {
        if (jahr % 4 == 0 && jahr % 100 !== 0 || jahr % 400 == 0) {
            console.log(jahr);
        }
    }
}
//Aufgabe 6 - Mehr Schleifen und Funktionen
console.log("Aufgabe 6:");
//a)
console.log("a)");
schleife();
function schleife() {
    let hashtag = "#";
    for (let i = 0; i < 7; i++) {
        console.log(hashtag);
        hashtag = hashtag + "#";
    }
}
//b)
console.log("b)");
fizzBuzz();
function fizzBuzz() {
    let zaehler = 1;
    for (zaehler; zaehler < 101; zaehler++) {
        if (zaehler % 3 == 0) {
            console.log("Fizz");
        }
        else if (zaehler % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(zaehler);
        }
    }
}
//c)
console.log("c)");
fizzBuzz2();
function fizzBuzz2() {
    let zaehler = 1;
    for (zaehler; zaehler < 101; zaehler++) {
        if (zaehler % 3 == 0 && zaehler % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (zaehler % 3 == 0) {
            console.log("Fizz");
        }
        else if (zaehler % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(zaehler);
        }
    }
}
//d)
console.log("d)");
schachbrett();
function schachbrett() {
    let brett = "";
    for (let zeilen = 1; zeilen < 9; zeilen++) {
        for (let character = 1; character < 9; character++) {
            if (zeilen % 2 !== 0 && character % 2 !== 0 || zeilen % 2 == 0 && character % 2 == 0) {
                brett = brett + " ";
            }
            else {
                brett = brett + "#";
            }
        }
        brett = brett + "\n";
    }
    console.log(brett);
}
//e)
console.log("e)");
let groesse = 5;
schachbrett2(groesse);
function schachbrett2(gr) {
    let brett = "";
    for (let zeilen = 1; zeilen < gr + 1; zeilen++) {
        for (let character = 1; character < gr + 1; character++) {
            if (zeilen % 2 !== 0 && character % 2 !== 0 || zeilen % 2 == 0 && character % 2 == 0) {
                brett = brett + " ";
            }
            else {
                brett = brett + "#";
            }
        }
        brett = brett + "\n";
    }
    console.log(brett);
}
//# sourceMappingURL=script.js.map
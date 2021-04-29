namespace Aufgabe2_2 {
    //Aufgabe 1 - Mehr "langweilige Konsolenausgaben"
    console.log("Aufgabe 1");

    //a)
    console.log("a)");
    console.log(min(23, 45, 35, 96, 2, 47, 7, -4, 1));
    function min(..._num: number[]): number {
        let minimum: number = _num[0];
        for (let i: number = 0; i < _num.length; i++) {
            if (_num[i] < minimum) {
                minimum = _num[i];
            }
        }
        return minimum;
    }

    //b)
    console.log("b)");
    console.log("mit 50");
    console.log(isEven(50));
    console.log("mit 75");
    console.log(isEven(75));
    console.log("mit -1");
    console.log(isEven(-1));
    
    function isEven(_num1: number): boolean {
        if (_num1 == 0) {
            return true;
        }
        else if (_num1 == 1) {
            return false;
        }
        else if (_num1 < 0) {
            return isEven(_num1 * -1);
        }
        else {
            return isEven(_num1 - 2);
        }
    }

    /* Was passiert bei -1? Uncaught RangeError: Maximum call stack size exceeded --> geht immer weiter ins negative Unendliche. Lösung, Zahl positiv machen,
    damit er "normal" schauen kann, ob positiv oder negativ */

    //c)
    console.log("c)");
    //1.
    interface StudentIn {
        name: string;
        vorname: string;
        matrikelnummer: number;
    }

    //2.
    let studi1: StudentIn = {name: "Müller", vorname: "Max", matrikelnummer: 123456};
    let studi2: StudentIn = {name: "Schneider", vorname: "Anna", matrikelnummer: 789123};
    let studi3: StudentIn = {name: "Maier", vorname: "Alex", matrikelnummer: 456789};

    //3.
    let studirendenArray: StudentIn[] = [];
    studirendenArray.push(studi1);
    studirendenArray.push(studi2);
    studirendenArray.push(studi3);
    studirendenArray.push({name: "Schmid", vorname: "Emma", matrikelnummer: 135791});

    console.log(studi1.name);
    console.log(studi1.matrikelnummer);
    console.log(studi2.vorname);
    console.log(studi3.vorname);
    console.log(studi3.name);
    console.log(studirendenArray[3].name);
    console.log(studirendenArray[3].matrikelnummer);

    //4. Übergabeparameter einzeln gewählt, da in der Aufgabe stand ...mit geeigneten Übergabeparametern (sonst hätte ich den Student als Übergabeparameter benutzt)
    for (let i: number = 0; i < studirendenArray.length; i++) {
        showInfo(studirendenArray[i].name, studirendenArray[i].vorname, studirendenArray[i].matrikelnummer);
    }

    function showInfo(_name: string, _vorname: string, _matrikelnummer: number): void {
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

    let array1: number[] = [1, 2, 3, 4, 5, 6];
    console.log(backwards(array1));

    function backwards(_array: number[]): number[] {
        let arraybackwards: number[] = [];
        for (let i: number = _array.length - 1; i >= 0 ; i--) {
            arraybackwards.push(_array[i]);
        }
        return arraybackwards;
    }

    //b)
    console.log("b)");

    let array2: number[] = [7, 8, 9, 10, 11, 12];
    console.log(join(array1, array2));
    
    function join(_arr1: number[], _arr2: number[]): number[] {
        let arrayjoin: number[] = _arr1; 
        for (let i: number = 0; i < _arr2.length; i++) {
            arrayjoin.push(_arr2[i]);
        }
        return arrayjoin;
    }


    //c)
    console.log("c)");
    console.log(split(array1, 2, 4));
    

    function split(_arr: number[], _index1: number, _index2: number): number[] {
        let arraysplit: number[] = [];
        for (let i: number = _index1; i <= _index2; i++) {
            arraysplit.push(_arr[i]);
        }
        return arraysplit;
    }


    //Aufgabe 3 - Endlich was virtuelles
    console.log("Aufgabe 3");
    //a)
    console.log("a) siehe Seite");
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_3.a)");
    let contextBoden: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextHimmel: CanvasRenderingContext2D = canvas.getContext("2d");
    let contextHause: CanvasRenderingContext2D = canvas.getContext("2d");

    contextBoden.fillStyle = "green"; 
    contextBoden.fillRect(10, 300, 400, 50);

    contextHimmel.fillStyle = "blue";
    contextHimmel.fillRect(10, 10, 400, 300);

    contextHause.lineWidth = 10;
    contextHause.strokeRect(50, 220, 150, 100);
    contextHause.fillStyle = "white";
    contextHause.fillRect(50, 220, 150, 100);
    contextHause.fillStyle = "black";
    contextHause.fillRect(100, 260, 40, 60);





    //b)
    console.log("b)");



    //c)
    console.log("c)");



    //d)
    console.log("d)");


    //e)
    console.log("e)");


    //f)
    console.log("f)");


    //g)
    console.log("g)");
    
    
    
    
    
    
    
    
    
}






// Objektliteral
const car = {
    marke: 'Toyota',
    model: 'S3',
    year: 2022
}

// Als Funktion
function Car(marke, model, year){
    this.marke = marke;
    this.model = model;
    this.year = year;
}
const myCar = new Car('Tesla', 'S2', 2000)

// Klasse
class Kfz {
    constructor(marke, model){
        this.marke = marke;
        this.model = model;
    }
}
const myKfz = new Kfz('VW', 'Touran')

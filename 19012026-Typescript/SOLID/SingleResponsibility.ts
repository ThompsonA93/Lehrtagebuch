/**
 * Das Single Responsibility Principle (SRP) beschreibt:
 *      Eine Klasse hat exakt einen Grund sich zu verändern
 *      Eine Klasse hat genau einen Grund zu existieren
 *      Eine Klasse antwortet genau einem Actor (HR, FI, Biz, IT, ...).
 *      ...
 * Eine Klasse die zuviel implementiert beschreibt man als 'fragile'.
 */
class BadUser {
    constructor(public name: string, public email: string){}

    rename(newName: string){
        this.name = newName;
    }
    validateEmail(){
        return this.email.includes("@");
    }
    saveToFile(){
        console.log(`Saving ${this} to file ...`);
    }
}

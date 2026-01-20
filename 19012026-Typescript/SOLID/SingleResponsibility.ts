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

class SRPUser {        // "Record", Data Class, Data Access object (DAO)
    constructor(public name: string, public email: string){}
    rename(name: string){ this.name = name; }
}
class SRPUserValidator{        // Globale validator klasse
    static isValid(user: SRPUser): boolean {
        return user.email.includes("@");
    }
}
class SRPUserRepository {      // Data-Persistence Class -- managed alle DB-Anfragen
    save(user: User){
        console.log(`DB:: Saving ${user} to storage.`);
    }
}
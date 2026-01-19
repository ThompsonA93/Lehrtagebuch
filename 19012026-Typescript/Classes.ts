/**
 * Eine Klasse ist eine Bauplan für eine Objekt.
 */
class BankAccount { // { = Alt Gr + 7 
    // Kapselung bzw. Encapsulation: Versteckt Details
    private _balance: number;
    public readonly accountNumber: number;

    constructor(initDeposit: number, accountNumber: number){
        this._balance = initDeposit;
        this.accountNumber = accountNumber;
    }

    public deposit(amount: number): void{
        if(amount <= 0){    // -5 macht 0 Sinn // Early return, auch Schutzklausel
            throw new Error("Deposit must be at least 1.");
        }
        this._balance += amount;
    }
    
    get balance(): number{
        return this._balance;
    }
}

const acc = new BankAccount(100, 123) // Parameter für Constructor
acc.deposit(500);
console.log(acc.balance); // 100+500 = 600


/**
 * PITFALL: Duck Typing
 * "If it quacks like a duck, walks like a duck, flies like a duck, 
 *      it's probably a duck"
 */
class Dog {name: string = "Fido"};
class Human {name: string = "Bob"};
const pet: Dog = new Human();
console.log(pet.name);
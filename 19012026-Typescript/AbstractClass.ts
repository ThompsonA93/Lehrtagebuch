/**
 * Abstract Class: Eine Abstrakte Klasse ist ein Mittelding zwischen Klasse und Interface.
 * 
 * 1. Es kann sowohl Methoden (mit Code) als auch abstrakte Methoden (ohne Code) implementieren
 * 2. Kann NICHT direkt instanziert werden. Muss von einer konkreten Klasse extended werden.
 * Fazit: Wird verwendet um mehrere ähnliche Klassen miteinander zu generalisieren.
 */
abstract class PaymentProcessor{
    constructor(protected amount: number){} // Konstruktor für konkrete Klassen
    displayAmount(): void{  // Konkrete Klasse mit Code
        console.log(`Processing ${this.amount}`);
    }
    abstract processPayment(): void;    // Abstrakte Klasse ohne Code
}

class StripePaymentProcessor extends PaymentProcessor{
    processPayment(): void { console.log(`Charging ${this.amount} via Stripe API`); }
}
class PayPalPaymentProcessor extends PaymentProcessor{
    processPayment(): void { console.log(`Charging ${this.amount} via PayPal API`); }
}
const stripe = new StripePaymentProcessor(50);
stripe.displayAmount(); stripe.processPayment();

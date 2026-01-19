let user = "Herbert";
let isAdmin = false;
let isOwner = true;
let isBanned = false;
// Boolean Algebra && || 
if((isAdmin || isOwner) && !isBanned){
    console.log("Allowed")
}

// Vergleichsoperatoren: > < >= <= == ===
// == -> Abstrakte Vergleich (Nur Wert)
/// === -> Strikte Vergleich (Wert und Typ)
let temperature = 25;
let isSunny = true;
if(temperature == 25 || (temperature > 25 && isSunny)){
    console.log("Fits")
}

// Ternäre Operator
let age = 20;
let state = (age >= 18) ? "Adult" : "Child";
console.log(state);

// Short-Circuiting
// if(un){ displayeName = "Gunter"}
// un -> String : Wie geht das bei if(un)? -> "Truthy versus Falsy"
let un = "Anna"
let displayName = un && "Gunther"; // "Anna" && "Gunther" -> displayName = "Gunther" 
console.log(displayName)



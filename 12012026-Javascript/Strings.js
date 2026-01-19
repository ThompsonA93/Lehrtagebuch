let single = 'Hello'; // Shift + #
let double = "World"; // Shift + 2
let backtick = `${single} ${double} great ${double}`; // Shift + ´

// console.log(single, double, backtick);

let stringOperators = {
    setString: String(3.14), // String
    setStringObj: new String(3.14), // Object
    getIndex: backtick[4], // ${single} -> 'Hello' -> 4. Index = 0
    addNumber: single + 2024, // concatenation -- ZUsammenfügen von Strings
    addString: single + double,
    compareString: single > double
}
// console.log(stringOperators)


let stringMethods = { // Vordefiniert in Javascript bzw. ECMAScript
    upper: single.toUpperCase(),
    lower: single.toLowerCase(),
    charAt: backtick.charAt(10),
    slice: backtick.slice(3,10),
    include: double.includes('for'),
    replace: backtick.replace("World", "Leute")

}
console.log(stringMethods)
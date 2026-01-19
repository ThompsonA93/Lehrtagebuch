// Normale Deklaration
function greet(name){
    console.log(`Hello ${name}`)
}
//greet("World")

// Function Expression
const multiply = function(a,b){
    return a*b;
};
//console.log(typeof multiply, multiply(5,3))

// Arrow Function, auch Lambda-Funktion
const add = (a,b) => a+b;
console.log(typeof add, add(7,3))

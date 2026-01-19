const vals = [ // Array
    3.14, //Number
    "3.14", // String
//    true, // Boolean
//    null, // null
//    undefined, // undefined
//    Symbol('Hi'), // Symbol
]

const results = vals.flatMap( v =>
    vals.map( w => ({
        "Value A": String(v),
        "Value B": String(w),
        "Equals (==)": v == w, // Wertvergleich
        "Strict (===)": v === w, // Wert+Typvergleich
    }))
)
//console.table(results)

// Truthy versus Falsy
let values = [
    false, 
    0, -0, 0n,
    "",
    null, undefined,

    true,
    42,3.14,42n,
    "0", "false",
    {}, [],
    Infinity
]

for(let v of values){
    if(v){ // Wenn v truthy, dann ... || falsy, dann ...
        console.log(v, " is truthy")
    }else{
        console.log(v, " is falsy")
    }
}




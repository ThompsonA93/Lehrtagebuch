const numTypes = {
    int: 100,
    float: 3.15,
    exponential: 1.23e4,
    hexa: 0xFF, // Null x
    octa: 0o377, // null o
    binary: 0b11110000, // null b
    billion: 1_000_000_000,
    cents: 1_500.75,
    bytes: 0xFF_AB_35
};
//for(let num in numTypes){
//    console.log(num, ":", numTypes[num], typeof numTypes[num]);
//}

// console.log(0.1+0.2);

const numLimits = {
    biggestInt: Number.MAX_SAFE_INTEGER,
    biggestNum: Number.MAX_VALUE,
    smallestInt: Number.MIN_SAFE_INTEGER,
    smallestNum: Number.MIN_VALUE,
    infinity: Infinity,
    negInfinity: -Infinity
}
//console.log(numLimits)


const input = "10.50px";
const numMethods = {
    parseInt: Number.parseInt(input),
    parseFloat: Number.parseFloat(input),
}
console.log(numMethods)

console.log("0 === -0", 0 === -0);


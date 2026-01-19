const fruits = ['apple', 'banana']  // Array
const vegetables = { potatoe: 2, tomatoe: 5 }    // Object

// For Loop Für arrays: via index
for(let i = 0; i < fruits.length; i++){
//    console.log(fruits[i]);
}

// Für objects: via Keys (potatoe, tomatoe)
const keys = Object.keys(vegetables);
for(let i = 0; i < keys.length; i++){
    //console.log(keys[i], vegetables[keys[i]])
}

// For-Of: Iterables (Interface), Arrays
for(let fruit of fruits){
 //   console.log(fruit)
}

// For-In: Optimal für Key-Value Objects
// const vegetables = { potatoe: 2, tomatoe: 5 }    // Object
for(let key in vegetables){
//    console.log(key, vegetables[key])
}

// For-Each: Optimal für arrays, nicht für Objekte
fruits.forEach((fruit, index) => {
//    console.log(index, fruit)
})
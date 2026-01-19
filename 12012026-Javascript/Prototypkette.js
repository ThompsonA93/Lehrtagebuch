const arr = [1,2,3]

console.log(arr)
console.log(Object.getPrototypeOf(arr))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr))))

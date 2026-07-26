// Primitive

// 7 types : 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100 // Number
const score1 = 100.5 // Number
const scoreValue = "100" // String
const isLoggedIn = false // Boolean
let userEmail; // Undefined
const userEmail2 = null // Null
const id = Symbol("123") // Symbol
const id2 = Symbol("123") // Symbol
const bigNumber = 3456789012345678901234567890n // BigInt

console.log(typeof score)
console.log(typeof score1)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof userEmail)
console.log(typeof userEmail2)
console.log(typeof id)
console.log(id)
console.log(typeof id2)
console.log(id2)
console.log(id === id2) // false, because each Symbol is unique
console.log(typeof bigNumber)

// Reference
// Arrays, objects, functions

const heros = ["thor", "ironman", "spiderman"] // Array

let obj = {
    name: "Meet",
    age: 21,
} // object

const func = function() {
    console.log("Hello World");
}

console.log(typeof heros)
console.log(typeof obj)
console.log(typeof func)
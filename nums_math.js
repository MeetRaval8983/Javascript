const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(1))

const otherNumber = 23.8495
console.log(otherNumber.toPrecision(3))

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN"))

// -------------------Maths--------------------

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(6.4))
console.log(Math.ceil(4.2))
console.log(Math.floor(3.9))
console.log(Math.min(3,6,8,9))
console.log(Math.max(2,5,7,10))

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.random() * 10 + 1)

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
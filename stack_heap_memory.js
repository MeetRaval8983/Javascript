// Stack(Primitive) and Heap(Non-primitive/Reference) Memory
// primitive creates copy and non-primitives creates reference

let myNumber = 100 // stored in stack memory
let myNum = myNumber // stored in stack memory

console.log(myNumber) // 100
console.log(myNum) // 100

myNum = 200 // changing value of myNum

console.log(myNumber) // 100
console.log(myNum) // 200

// Non-primitive/Reference types
let userOne = {
    name: "Meet",
    age: 21,
} // stored in heap memory

let userTwo = userOne // stored in heap memory

console.log(userOne) // { name: 'Meet', age: 21 }
console.log(userTwo) // { name: 'Meet', age: 21 }

userTwo.age = 22 // changing value of userTwo

console.log(userOne) // { name: 'Meet', age: 22 }
console.log(userTwo) // { name: 'Meet', age: 22 }
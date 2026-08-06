// singleton
// Object.create

const mySymbol = Symbol("key1");

// object literals
const JsUser = {
    name: "Meet", // key:value
    age: 20,
    location: "Pune",
    "fullname": "Meet Raval",
    [mySymbol]: "myValue",
    mySymbol1: "myValue1",
    email: "meet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySymbol]);
console.log(typeof mySymbol);

JsUser.email = "abc@gmail.com"
// Object.freeze(JsUser) // freeze object
JsUser.email = "demo@gmail.com"
console.log(JsUser.email) // email will not change because object is frozen
console.log(JsUser) // print whole object

JsUser.greeting = function() {
    console.log("Hello JsUser")
}

console.log(JsUser.greeting())
console.log(JsUser.greeting)

JsUser.greeting2 = function() {
    return `Hello ${this.name}` // string interpolation and this keyword to access the object property
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

// Singleton object
// const tinderUser = new Object() // object constructor

// Non - singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Meet"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // print whole object

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Meet",
            lastname: "Raval"
        }
    }
}

console.log(regularUser.fullname.userFullname) // accessing nested object property
console.log(regularUser.fullname?.userFullname.firstname) // accessing nested object property


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2} // nested object
// const obj3 = Object.assign({},obj1, obj2, obj4) // merge multiple objects

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator to merge multiple objects
console.log(obj3)


const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 2,
        email: "abc2@gmail.com"
    },
    {
        id: 3,
        email: "abc3@gmail.com"
    },
    {
        id: 4,
        email: "abc4@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) // get all keys of object
console.log(Object.values(tinderUser)) // get all values of object
console.log(Object.entries(tinderUser)) // get all key-value pairs of object

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // check if object has a property
console.log(tinderUser.hasOwnProperty("isLogged"))
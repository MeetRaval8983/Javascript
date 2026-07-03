"use strict"; // treat all JS code as newer version of JS

// alert(3 + 3); 
// we can use alert to show output in browser but not here in nodejs

console.log(3 
    + 3); // Readability
console.log("Hello, World!");

let name = "Meet"; // string
let age = 21; // number
let isLoggedIn = false; // boolean
let state; // undefined
let temp = null; // null

// number => 2^53
// bigint => 2^53+
// string => "", '', ``
// boolean => true/false
// null => standalone value
// undefined => standalone value
// symbol => unique and immutable value

// object
console.log(typeof "Meet");
console.log(typeof age);
console.log(typeof(undefined)); //undefined
console.log(typeof null); // object
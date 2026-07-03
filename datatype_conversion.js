let score = "33";
// let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let value = Number(score); // convert string to number
console.log(value);
console.log(typeof value);

let a = Number(null);
let b = Number(undefined);
console.log(a, b);
console.log(typeof a, typeof b);

// string
let c = Number("Hello");
console.log(c);
console.log(typeof c);

// boolean
let d = Number(true);
console.log(d);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

let e = Boolean("");
console.log("Empty: " + e);

let f = Boolean("Hello");
console.log("Non-empty: " + f);

let str = String(123);
console.log(str);
console.log(typeof str);
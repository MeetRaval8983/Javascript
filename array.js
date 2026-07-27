const arr = [0, 1, 2, 3, 4, 5]
const name = ["abc", "def"]

const myarr = new Array(1, 2, 3, 4)
console.log(myarr[1])

myarr.push(8)
myarr.push(10)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(7)
myarr.unshift(24)
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(1));
console.log(myarr.indexOf(7));

const newArr = myarr.join()

console.log(myarr);
console.log(typeof myarr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("A ", myarr);
const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);

const a = ["thor", "ironman", "hulk", "captain america"]
const b = ["loki", "thanos", "hela"]

// a.push(b)
// console.log(a)
// console.log(a[4][1]) // thanos

// a.concat(b)
// console.log(a) // ["thor", "ironman", "hulk", "captain america"]

// const c = a.concat(b)
// console.log(c)

// spread operator
const d = [...a, ...b]
console.log(d)

const e = [...a, "spiderman", ...b]
console.log(e)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array);


const flat_array = another_array.flat(Infinity)
console.log(flat_array)

console.log(Array.isArray("abc"))
console.log(Array.from("abc"))
console.log(Array.from({name: "John"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
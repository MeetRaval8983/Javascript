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
// Dates

let date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())

// let myDate = new Date("2023-06-15")
let myDate = new Date(2023, 3, 24, 5, 6)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let d = new Date("2023-06-15")
let myTime = Date.now()
console.log(myTime)
console.log(d.getTime())
console.log(Math.floor(myTime / 1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
})
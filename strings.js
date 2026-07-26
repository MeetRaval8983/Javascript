const name = "Meet"
const repo = 50
console.log(name + repo + " GitHub repositories")

console.log(`My name is ${name} and I have ${repo} GitHub repositories`)

const gameName = new String("Chess")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("e"))

const newString = gameName.substring(0, 3)
console.log(newString)

const newString2 = gameName.slice(0, 4)
console.log(newString2)

const newString3 = gameName.slice(-5, -2)
console.log(newString3)

const newString4 = "    Hello World   "
console.log(newString4.trim())

const newString5 = "Hello World"
console.log(newString5.split(" "))

const url = "https://meetcodes.com"
const newString6 = url.replace("https", "http")
console.log(newString6)

const newString7 = url.includes("meet")
console.log(newString7)
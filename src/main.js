const { addition, subtraction, multiplication, division } = require("./math")

const a = 100
const b = 25

console.log(`${a} + ${b} = ${addition(a,b)}`)
console.log(`${a} - ${b} = ${subtraction(a,b)}`)
console.log(`${a} * ${b} = ${multiplication(a,b)}`)
console.log(`${a} / ${b} = ${division(a,b)}`)

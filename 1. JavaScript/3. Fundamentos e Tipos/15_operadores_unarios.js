let num1 = 1
let num2 = 2

num1++ // adiciona 1
console.log(num1)
--num1  // maior prioridade do que num1--
console.log(num1)

console.log(++num1 === num2--)
console.log(++num1 === --num2) // fugir de códigos complexos
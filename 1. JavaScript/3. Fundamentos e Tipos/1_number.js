const int1 = 1.0
const num1 = Number(1.0)
const num2 = Number("1.5") // outro jeito de declarar numeros ou converter strings

console.log(int1, num1)
console.log(Number.isInteger(int1)) // verifica se uma variavel é uma int
console.log(Number.isInteger(num1))
console.log(Number.isInteger(num2)) 

const flt1 = 10/3

console.log(flt1)
console.log(flt1.toFixed(2)) // limita o numero de casas decimais

console.log(int1.toString()) // transforma o numero em uma string
console.log(typeof int1.toString()) // transforma o numero em uma string

// console.log(10.toString()) = erro, nao funciona encima do valor literal
console.log((10).toString())
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo) 
// true e false não são strings, são represantações da dualidade 0 e 1

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('------------verdadeiros---------------')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('------------falsos---------------')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('' || null || ' ' || 0) // || = ou, && = e

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido') // usado para valor padrão
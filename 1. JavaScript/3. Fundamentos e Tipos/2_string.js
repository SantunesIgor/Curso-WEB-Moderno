const escola = "Cod3r"

console.log(escola.charAt(0)) // da o char que está na index
console.log(escola.charAt(25)) // não da erro, retorna null

console.log(escola.charCodeAt(3)) // codigo da tabela unicode do char no index

console.log(escola.indexOf('3')) // retorna o index da char '3'

// corta a string no intervalo desejado
console.log(escola.substring(1)) // vai do index 1 até o final
console.log(escola.substring(0, 3)) // segue o intervalo

console.log('Escola '.concat(escola).concat('!')) // função para concatenar strings
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/g, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana, Maria, Pedro'.split(', ')) // divide a string em um array
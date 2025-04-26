// lista de python

const valores = [7, 8, 9, 10]

console.log(valores[0], valores[2]) // acessar o valor pelo index

console.log(valores[3])
console.log(valores);
valores[3] = 25
console.log(valores[3]) // como trocar o valor de um elemento da array
console.log(valores);

console.log(valores.length) // quantos elementos tem o array

valores.push({id: 3}, false, null, 'teste') // adiciona esses valores no array
console.log(valores)

console.log(valores.pop()) // elimina o ultimo valor do array
delete valores[0] // elimina o valor conforme o index
console.log(valores[0])
console.log(valores)

console.log(typeof valores)
const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`) // usar ` possibilita o uso de place holders

const up = texto =>
    texto.toUpperCase()

console.log(`${up('maiúsculas')}`) // usar ` possibilita o chamar funções dentro da string
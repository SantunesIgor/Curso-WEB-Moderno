const pessoa = {
    nome: 'Ana',
    idade: 5,
    cidania: 'Brasileira'
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, rua = true} = pessoa
console.log(sobrenome, rua)

const [a] = [10]
console.log(a, typeof a)
const [n1, n2, n3, n4, n5 = 0] = [1, 2, 3, 4]
console.log(n1, n2, n3, n4, n5)

function rand({min = 0, max = 1000} = {}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max:50, min:40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

console.log('---------------------')

function random([min = 0, max = 1000] = []){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(random([100, 0]))
console.log(random([900]))
console.log(random([, 10]))
console.log(random([]))
console.log(random())
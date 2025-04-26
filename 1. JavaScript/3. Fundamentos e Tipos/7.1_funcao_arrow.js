// Armazenar a função em uma variável
const soma = function (a, b){
    console.log(a + b)
}

soma(1, 1)

// Função Arrow
const somaArrow = (a, b) => {
    return a + b
}

console.log(somaArrow(1, 2))

// Retorno implicito
const somaReturn = (a, b) => a + b

console.log(somaReturn(2, 2))
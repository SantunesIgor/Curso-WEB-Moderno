console.log(typeof Object)
class Produto {}
console.log(typeof Produto)

function imprimirSoma(a, b){
    return a + b;
}
console.log(imprimirSoma(2, 2, 2, 2, 2)) // 4, ele não pega os demais números
console.log(imprimirSoma(2, 2)) // 4
console.log(imprimirSoma(2)) // 2
console.log(imprimirSoma()) // NaN

function imprimirSoma(a, b = 0){ // substitui b por 0 caso o parametro não seja passado
    return a + b;
}
console.log(imprimirSoma(2))
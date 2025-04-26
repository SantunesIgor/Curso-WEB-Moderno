// est 1
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(0, 1, 2)) // 0 assume 1 deste jeito

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(0, 1, 2)) // esses jeitos conferem melhor

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(0, 1, 2)) // versao certa
function maiorque(num1, num2){
    if (num1 > num2){
        return true
    }

    return false // sem else
}

function menorque(num1, num2){
    if (num1 < num2) // nao precisa usar chaves quando é uma unica sentença
        return true
    return false
}

function iguala(num1, num2){
    if(num1 === num2)
        return true
    else
        return false // pode fazer sem chaves também, mas com é mais organizado
}

console.log(maiorque(10, 5))
console.log(maiorque(5, 10))

console.log(menorque(10, 5))
console.log(menorque(5, 10))

console.log(iguala(10, 10))
console.log(iguala(5, 10))
{{{{{{var sera = 'Será?'}}}}}} // funciona em qualquer lugar
console.log(sera)

function teste(){
    var local = 123 // funciona apenas na função
}

// ---------------------------------------

var numero = 1
{
    var numero = 2
    console.log(numero) // var não tem escopo de bloco
}
console.log(numero)

let num = 1
{
    let num = 2
    console.log(num) // let tem escopo de bloco
}
console.log(num)

// Ele irá bucar a variavel mais próxima

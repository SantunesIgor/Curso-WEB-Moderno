const resultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Recuperação')
            break
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Numero Inválido')
    }
}

resultado(1728)
resultado(9)
resultado(6)
resultado(2.5)
resultado(-19)
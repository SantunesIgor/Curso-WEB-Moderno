function resultado(num1){
    if (num1 > 10 || num1 < 0){
        console.log('Número Inválido')
    }else if (num1 >= 7) {
        console.log('Aprovado')
    }else if (num1 >=5) {
        console.log('Recuperação')
    }else{
        console.log('Reprovado')
    }
}

resultado(1728)
resultado(9)
resultado(6)
resultado(2.5)
resultado(-19)
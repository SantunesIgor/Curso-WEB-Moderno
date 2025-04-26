const fabricantes = ["mercedes", 'bmw', 'bentley']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (fabricante){console.log(fabricante)})
fabricantes.forEach(f => console.log(f))

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)
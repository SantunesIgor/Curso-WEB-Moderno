// for (var i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log('i =', i)

// for(let a = 0; a < 10; a++){
//     console.log(a)
// }
// // console.log(a) nao funciona

// -----------------------------------------------------

// const funcs = []

// for(var i = 0; i < 10; i++){
//     funcs.push(function(){
//         console.log(i)
//     })
// }
// funcs[2]()
// funcs[8]()

const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]() // let tem memoria do momento que a variavel foi gravada

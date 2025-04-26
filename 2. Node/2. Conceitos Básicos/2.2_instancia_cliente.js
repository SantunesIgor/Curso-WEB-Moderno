const contador_a = require('./2.1_instancia_unica')
const contador_b = require('./2.1_instancia_unica')

const contador_c = require('./2_instancia_nova')()
const contador_d = require('./2_instancia_nova')() // criados a partir de uma factory

contador_a.inc()
contador_a.inc()
console.log(contador_a.valor)
console.log(contador_b.valor) // 3, o contador b esta sincronizado com o a

contador_c.inc()
contador_c.inc()
console.log(contador_c.valor)
console.log(contador_d.valor)
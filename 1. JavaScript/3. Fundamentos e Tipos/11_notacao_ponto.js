console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "obj1"
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Porta")
console.log(obj2.nome)
console.log(obj3.nome)
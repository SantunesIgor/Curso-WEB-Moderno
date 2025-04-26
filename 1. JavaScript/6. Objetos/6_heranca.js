const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

const avo = { atr1: "A" };
const pai = { __proto__: avo, atr2: "B" };
const filho = { __proto__: pai, atr3: "C" };
console.log(filho.atr1, filho.atr2, filho.atr3);

const persona1 = { nome: "Pedro", corCabelo: "Preto" };

const persona2 = Object.create(persona1);
persona2.nome = "Ana";
console.log(persona2.nome, persona2.corCabelo);

console.log(Object.keys(persona2));

for (let key in persona2) {
  persona2.hasOwnProperty(key) ? console.log(key) : console.log("Por Herança");
}

function Objeto1() {}

const obj1 = new Objeto1();
const obj2 = new Objeto1();
console.log(obj1.__proto__ === obj2.__proto__);
console.log(Objeto1.prototype === obj1.__proto__);

Objeto1.prototype.nome = "Anônimo"; // adiciona ao pai
Objeto1.prototype.falar = function () {
  // add ao pai
  console.log("Bom dia!");
};

obj1.falar();

console.log(typeof String, typeof Array, typeof Object); // toda funçao tem um proto, podemos add coisas nessas.

String.prototype.reverse = function () {
  // não substitua.
  return this.split("").reverse().join("");
};

console.log("Hello World".reverse());

function Aula(nome, id){
    this.nome = nome
    this.id = id
}

const aula1 = new Aula('Bem Vindo', 1)
const aula2 = new Aula('Aula 2', 2)

// simulando o 'new'
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 1)
console.log(aula1, aula3)
function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Note",
  preco: 1000,
  desc: 0.1,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 1000, desc: 0.2 };

console.log(getPreco.call(carro)); // direto na função
console.log(getPreco.apply(carro)); // atravez de um array

const obj1 = {};

const obj2 = new Object();

function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("prdt1", 100, 0.1);
const p2 = new Produto("prdt2", 1000, 0.2);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

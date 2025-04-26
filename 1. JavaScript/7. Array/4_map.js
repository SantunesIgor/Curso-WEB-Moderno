// faz o remap do array para outro array, com mudanças lógicas
const n = [1, 2, 3, 4, 5];

const m = n.map(function (e) {
  return e * 2;
});

console.log(m);

const o = (e) => e ** 2;
const p = (e) => e / 2;

q = n.map(o).map(p); // pode botar mais de um  map
console.log(q);

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
]; // retornar array apenas com os preços

valores = carrinho
  .map(function (e) {
    return JSON.parse(e);
  })
  .map(function (e) {
    return e.preco;
  });

console.log(valores);

// criando o propio map
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

valores = carrinho
  .map2(function (e) {
    return JSON.parse(e);
  })
  .map2(function (e) {
    return e.preco;
  });

console.log(valores);

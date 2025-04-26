const carrinho = [
  { nome: "Borracha", preco: 3.45 },
  { nome: "Caderno", preco: 13.9 },
  { nome: "Kit de Lapis", preco: 41.22 },
  { nome: "Caneta", preco: 7.5 },
];

let caros = carrinho.filter(function (e) {
  // return true = adiciona ao array / return false = tira do array
  if (e.preco <= 10) return false;
  return true;
});
console.log(caros);

Array.prototype.filterPropio = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray
};

caros = carrinho.filterPropio(function (e) {
    if (e.preco<= 10) return false;
    return true;
  });
console.log(caros);

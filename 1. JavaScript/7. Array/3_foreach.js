const aprovados = ["Ana", "Bruno", "Carla", "Douglas"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach((nome) => console.log(nome)); // o primeiro paramentro é o valor, o segundo é o indice, e o 3º é o array inteiro

// ----------------- foreach propio --------------
Array.prototype.forEachPropio = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

aprovados.forEachPropio(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

fs.writeFile(
  __dirname + "/8.1_arquivo.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo salvo!");
  }
);

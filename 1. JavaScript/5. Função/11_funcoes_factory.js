// função que retorna um obj

function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());

function criarProduto(id = "", nome = "", quantidade = "", preco = "") {
  return {
    id,
    nome,
    quantidade,
    preco,
  };
}

let p20240323 = criarProduto("20240323", "Parafuso", 1000, 0.01);
console.log(p20240323);

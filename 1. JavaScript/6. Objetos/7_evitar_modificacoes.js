const produto = Object.preventExtensions({
  nome: "nome1",
  preco: 1000,
  tag: "tag1",
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha"; // pode alterar elementos
produto.descricao = "Branco"; // nao pode adicionar novos
delete produto.tag; // pode deletar os existentes
console.log(produto);

const obj1 = {
  chave1: 1,
  chave2: 2,
  chave3: 3,
};
Object.seal(obj1);
console.log("Selado:", Object.isSealed(obj1));

obj1.chave4 = 4; // nao adiciona
delete obj1.chave3; // não deleta
obj1.chave1 = 2; // pode modificar os valores
console.log(obj1);

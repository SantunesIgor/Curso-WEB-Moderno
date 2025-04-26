const obj1 = { nome: "Maria" };
obj1.nome = "Pedro";
console.log(obj1.nome);

// obj1 = {nome: 'Maria'} não pode ser declarado novamente

Object.freeze(obj1);
obj1.nome = "Maria";
console.log(obj1.nome);

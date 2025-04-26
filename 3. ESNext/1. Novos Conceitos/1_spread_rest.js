const funcionario = { nome: "Maria", salario: 12000 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

const grupoA = [1, 2, 3, 4];
const grupototal = [10, 20, ...grupoA, 100];
console.log(grupototal);

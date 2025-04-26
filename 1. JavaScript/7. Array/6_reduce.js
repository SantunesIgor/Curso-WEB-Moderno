// Reduz um array a um único valor

// Aula 1

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 7.3, bolsista: true },
];

console.log(alunos.map((a) => a.nota));

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  });

console.log(resultado);

// Aula 2

// Todos os alunos são bolsistas?
let bolsistas = alunos
  .map((e) => e.bolsista)
  .reduce((acumulador, atual) => acumulador && atual);
if (bolsistas == true) console.log("São todos bolsistas.");
if (bolsistas == false) console.log("Não são todos bolsistas.");

// Algum aluno é bolsista?
bolsistas = alunos
  .map((e) => e.bolsista)
  .reduce((acumulador, atual) => acumulador || atual);
if (bolsistas == true) console.log("Algum aluno é bolsista.");
if (bolsistas == false) console.log("Nenhum aluno é bolsista.");
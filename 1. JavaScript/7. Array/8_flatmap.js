// Map associado com Concat

const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaAluno = (aluno) => aluno.nota;
const getNotaTurma = (turma) => turma.alunos.map(getNotaAluno);

const notas1 = escola.map(getNotaTurma);
console.log(notas1);

const arrayNotas = notas1.flat()
console.log(arrayNotas);

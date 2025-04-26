// exemplifica o uso de promisse

const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
        console.log(resultado);
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

let obterAlunos = async () => {
  const tA = await getTurma("A");
  const tB = await getTurma("B");
  const tC = await getTurma("C");
  return [].concat(tA, tB, tC);
};
console.log(obterAlunos()
    .then((alunos) => alunos.map((a) => a.nome))
    .then(nome => console.log(nome))
);

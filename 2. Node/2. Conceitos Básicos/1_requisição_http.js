const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

// Qual a mulher chinesa com o menor salário?

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const funcionariasChinesas = funcionarios.filter(function (e) {
    if (e.pais == "China" && e.genero == "F") return true;
  });

  const FCMenorSalario = funcionariasChinesas.reduce(function (
    anterior,
    atual
  ) {
    if (atual.salario < anterior.salario) return atual;
    else return anterior;
  });

  console.log(FCMenorSalario)
});

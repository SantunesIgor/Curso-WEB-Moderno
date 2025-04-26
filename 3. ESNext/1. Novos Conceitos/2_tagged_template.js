function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Gui";
const status = "Aprovado";
console.log(`${aluno} está ${status}`);
console.log(tag`${aluno} está ${status}`);

function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

console.log(`1x de ${30} ou 3x de ${11}`);
console.log(real`1x de ${30} ou 3x de ${11}`);

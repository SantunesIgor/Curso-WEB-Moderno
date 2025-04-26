const pessoa = {
  saudacao: "Bom Dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflite pois etá em outro bloco

const falarDePessoa = pessoa.falar.bind(pessoa); // amarra o this a um objeto
falarDePessoa();

function Person() {
  // pode declarar uma variavel que armazena o valor de this e usar ela no lugar como const self = this
  this.idade = 0;
  setInterval(
    function () {
      this.idade++;
      console.log(this.idade);
    }.bind(this),
    1000
  );
}
new Person();

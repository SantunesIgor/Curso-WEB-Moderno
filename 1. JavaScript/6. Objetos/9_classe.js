class Lancamento {
  constructor(nome = "Genérico", valor = null) {
    // função chamada junto ao 'new'.
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 4500);
const contaDeLuz = new Lancamento("Luz", 220);

const contas = new CicloFinanceiro(8, 2006);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());

class Avo {
    constructor(sobrenome, nome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, nome){
        super(sobrenome)
        this.nome = nome
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)


// 01)
function fun1(val1, val2) {
  console.log(val1 + val2);
  console.log(val1 - val2);
  console.log(val1 * val2);
  console.log(val1 / val2);
}

fun1(10, 5);

// 02)
function triangulo(lad1, lad2, lad3) {
  if (lad1 == lad2 && lad2 == lad3 && lad1 == lad3) {
    console.log("Equilatero");
  } else if (lad1 == lad2 || lad2 == lad3 || lad1 == lad3) {
    console.log("Isosceles");
  } else {
    console.log("Escaleno");
  }
}

triangulo(1, 2, 3);
triangulo(1, 2, 2);
triangulo(2, 2, 2);

// 03)
const pow = (a, b) => a ** b;
console.log(pow(2, 2));

// 04)
const resto = (a, b) => a % b;
console.log(resto(9, 4));

// 05)
const arround = (a) => a.toFixed(2);
console.log(arround(0.1 + 0.2));

// 06)
const jurosSimples = (capitalinicial, taxadejuros, tempo) =>
  capitalinicial * taxadejuros * tempo + capitalinicial;
const jurosCompostos = (capitalinicial, taxadejuros, tempo) =>
  (capitalinicial * (1 + taxadejuros) ** tempo).toFixed(2);
console.log(jurosSimples(1000, 0.01, 12));
console.log(jurosCompostos(1000, 0.01, 12));

// 07)
function bhaskara(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    return "O delta é negativo!";
  }

  return [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)];
}
console.log(bhaskara(2, -5, -7));

// 08)
function performance(a) {
  let recordes = 0;
  for (i in a) {
    if (a[i - 1] < a[i]) {
      recordes++;
    }
  }
  return [recordes, a.indexOf(Math.min(...a)) + 1];
}
console.log(performance([10, 20, 20, 8, 25, 3, 0, 30, 1]));

// 09)
function arredondar(a) {
  a = a.sort((a, b) => b - a);
  let relacaoNotas = {};
  for (i in a) {
    if (a[i] < 38) {
      relacaoNotas[a[i]] = "Reprovado";
    } else {
      proxMultiplo = Math.ceil(a[i] / 5) * 5;
      if (proxMultiplo - a[i] < 3) {
        relacaoNotas[proxMultiplo] = "Aprovado";
      } else {
        relacaoNotas[a[i]] = "Aprovado";
      }
    }
  }
  return relacaoNotas;
}
console.log(arredondar([17, 21, 36, 42, 54, 61, 78, 86, 95, 100]));

// 10)
function divisivelTres(a) {
  if (a % 3 == 0) {
    return true;
  }
  return false;
}

lista = [1, 3, 4, 6];
for (i in lista) {
  console.log(divisivelTres(lista[i]));
}
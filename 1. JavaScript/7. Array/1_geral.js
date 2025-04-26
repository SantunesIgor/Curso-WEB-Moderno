console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana"); // se o array for const ele ainda pode ser alterado como um objeto por exemplo
console.log(aprovados);

// como chamar valores
aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[3]);

// adicionar elementos
aprovados[3] = "Paulo"; // adiciona no lugar do index passado
aprovados.push("Flavio"); // adiciona ao final do array
console.log(aprovados);

aprovados.sort(); // arruma o array para ordem alfabética/numérica
console.log(aprovados);

delete aprovados[1]; // coloca undefined no lugar do valor
console.log(aprovados);
aprovados[1] = "Bia";
console.log(aprovados);

aprovados.splice(1, 3, "Pedro", "Lucas"); // tira os arrays e reorganiza no espaço que foi tirado (tira o 3 elementos a partir do primeiro)
console.log(aprovados);

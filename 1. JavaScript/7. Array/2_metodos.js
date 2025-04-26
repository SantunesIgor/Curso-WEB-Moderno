const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // retira o ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // adiciona elemento ao final do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Renan"); // adiciona ao primeiro elemento
console.log(pilotos);

// splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, "Rogerinho", "Maurilio");
console.log(pilotos);

//remover
pilotos.splice(3, 1);
console.log(pilotos);

let cortePilotos = pilotos.slice(2); // novo array
console.log(cortePilotos);

cortePilotos = pilotos.slice(1, 4); // começa no primeiro e para em um antes do segundo
console.log(cortePilotos);

globalThis.MinhaApp = Object.freeze({
  saudação() {
    return "Olá!";
  },
  nome: "Sistema Legal",
}); // congelar o objeto para o escopo global seja imutavel, prefira módulos normais

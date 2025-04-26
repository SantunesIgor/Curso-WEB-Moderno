// Função factory para retornar um OBJ

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++;
    },
  };
};

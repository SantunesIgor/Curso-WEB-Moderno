function gerarNumero(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((res) => {
    let random = (Math.random() * (max - min) + min).toFixed(0);
    res(random);
  });
}

for (let i = 0; i != 100; i++) {
  gerarNumero(1, 60).then((numero) => console.log(numero));
}

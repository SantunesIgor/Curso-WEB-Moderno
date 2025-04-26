let p = new Promise((res, rej) => {
  res(3); // só pode devolver um valor, mais valores podem ser adicionados em objetos ou array, por exemplo.
});

p.then((res) => console.log(res)); // podem ser adicicionados mais .then que receberão a var anterior assim como callback

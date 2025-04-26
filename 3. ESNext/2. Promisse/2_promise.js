function esperar(t = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Exe");
      resolve("Err");
    }, t);
  });
}

esperar(3000)
  .then(() => esperar())
  .then(esperar);

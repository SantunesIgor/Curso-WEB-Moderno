function esperar(t = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), t);
  });
}

esperar(3000)
  .then(() => console.log("1"))
  .then(() => console.log("2"));

async function exe() {
  await esperar(1000);
  console.log(1);

  await esperar(1000);
  console.log(2);

  await esperar(1000);
  console.log(3);
}

exe()
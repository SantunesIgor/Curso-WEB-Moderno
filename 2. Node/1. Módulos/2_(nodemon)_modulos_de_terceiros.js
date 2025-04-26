// comando npm i ___ instala um módulo de terceiros (bibliotecas)

const lodash = require("lodash");
setInterval(() => {
  console.log(lodash.random(1, 500));
}, 1000);

// nodemon roda sempre a versão mais nova do código
const fs = require("fs");

const caminho = __dirname + "/7.1_arquivo.json";

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

const config = require("./7.1_arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arq) => {
  console.log(arq);
});

// chamada de funções
const bodyParser = require("body-parser");
const express = require("express");
const app = express(); // instancia do express, representa a aplicação web, essencial para acesso aos métodos do express

// definição dos middlewares - função que será executada assim que a requisição chegar no servidor
app.use(express.static(".")); // define a pasta raiz do servidor, onde estão os arquivos estáticos (HTML, CSS, JS, imagens, etc.)
app.use(bodyParser.urlencoded({ extended: true })); // permite que o servidor entenda os dados enviados pelo formulário, decodificando-os
app.use(bodyParser.json()); // permite que o servidor entenda os dados enviados em formato JSON

app.get("/teste", (req, res) => {
  // função middleware que será executada quando a rota /teste for acessada via GET
  res.send("Dados recebidos com sucesso!"); // envia uma resposta para o cliente
});

const multer = require("multer"); // importa o multer, que é um middleware para manipulação de arquivos enviados via formulário

const storage = multer.diskStorage({
  // configura o armazenamento dos arquivos enviados
  destination: (req, file, cb) => {
    // define o destino dos arquivos enviados
    cb(null, "./upload"); // callback que define a pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    // define o nome do arquivo enviado
    cb(null, `${Date.now()}_${file.originalname}`); // usa o nome original do arquivo
  },
});

const upload = multer({ storage }).single("file"); // cria uma instância do multer com as configurações de armazenamento

app.post("/upload", (req, res) => {
  // rota para upload de arquivos via POST
  upload(req, res, (err) => {
    // usa o middleware multer para processar o upload
    if (err) {
      // verifica se houve algum erro durante o upload
      return res.end("Erro ao fazer upload do arquivo."); // envia uma resposta de erro
    }

    res.end("Arquivo enviado com sucesso!"); // envia uma resposta de sucesso
  });
});

app.post("/formulario", (req, res) => {
    res.send({
        ...req.body, // envia os dados do formulário recebidos no corpo da requisição
        id: 1, // adiciona um ID fictício à resposta
    });
});

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0; // verifica se o número enviado na query string é par
    res.send({
        resultado: par ? 'par' : 'impar', // envia a resposta com o resultado
    })
});

app.listen(3000, () => {
  // inicia o servidor na porta 3000
  console.log("Servidor rodando na porta 3000"); // exibe uma mensagem no console do servidor
});

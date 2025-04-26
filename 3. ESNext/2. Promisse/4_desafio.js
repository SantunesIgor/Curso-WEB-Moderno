const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, 'dados.txt');

fs.readFile(dataPath, 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.error('Erro ao ler o arquivo:', err));
const express = require ('express'); // Aqui é a importação do express
const app = express(); // O app vai receber o express em execução

app.set('view-engine', 'ejs'); // O ejs será configurado como motor de telas do projeto
app.set('views', './app/views'); // A configuração do novo diretório na pasta views



module.exports=app;
const app = require('./config/server.js');                // Importamos nosso modulo
const rotaHome=require('./app/routes/home')(app);         // Direcionamos para a rota home
const rotaAdmin=require('./app/routes/admin')(app);       // Direcionamos para a rota admin
const rotaNoticias=require('./app/routes/noticias')(app); // Direcionamos para a rota noticias



app.listen('3000',function(){
console.log('Servidor rodando na porta 3000'); // Colocamos o servidor para rodar na porta 3000
});

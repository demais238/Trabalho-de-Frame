const mysql = require('mysql'); //importação do mysql

module.exports=function(){

    return mysql.createConnection({
        host: 'localhost', //configurando para o servidor hospedar localmente
        user: 'root',      //configurando para usuario root
        password:'ifms',   //configurando a senha do banco de dados
        database: 'portal_noticias' //Mostrando que o portal_noticias é o banco de dados que será utilizado
        
    });
} //Aqui vamos estabelecer uma conexão com o banco de dados mysql
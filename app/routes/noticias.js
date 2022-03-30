module.exports=function(app){
    app.get('/noticias', function(req,res){      //Aqui será adiministrada a rota para a página de noticias
        const dbConnection=require('../../config/dbConnection');
        const connection=dbConnection(); //Aqui é feita uma conexão com dbConnection
        connection.query('select * from noticias', function(error, result){
            
            if(error){
                console.log(error);
            };
            res.render('noticias/noticias.ejs', {noticias:result}); //Nesse local é renderizada a pagína de notícias
        });


    });
};
module.exports=function(app){
    app.get('/',function(req,res){
        
        res.render('home/index.ejs'); //Nesse local é renderizada a pagína home
    });
    
};
//Aqui será adiministrada a rota para a página home
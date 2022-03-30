module.exports=function(app){ 
    app.get('/formularioinclusaonoticia', (req,res)=>{
        
        res.render('admin/form_add_noticia.ejs'); //Nesse local é renderizadaa página  form_add_noticia
    });
};
//Aqui será adiministrada a rota para a página de inclusão de noticias
//impordanto express
    const express = require('express')
    const app = express()

//importando o model d para criar html apartir do JS
    const handlebars = require('express-handlebars')

//body-parser
    const bodyParser = require ('body-parser')
    
    //config
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

const Post = require('./models/Post')

//=========================================================================
//config
    //template egine
    //aqui basicamente falamos pro express que queremos usar o handlebars com templet engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    
//================================================================================

//Rotas
    app.get('/cadastros', (req,res)=>{
        res.render('form')  
    })
    //rota de redirecionamento
    app.get('/' , (req,res)=>{
        //chamando todos os modos do db
        Post.findAll({order:[['id', 'desc']]}).then((posts) => {
            res.render('home', {posts: posts})
            //caso queira alterar a ordem coloque dentro de findAll o seguinte:
            //{order: [['id', 'desc' ou 'asc']]}
            //desk e de  decrcente ou seja a ordem do mais novo para o mais antigo
        })
    })

//rota de recebimento(como no dormulario o metodo de envio esta como post
//aqui na rota tambem tem que ser alterado)
    app.post('/add', (req,res)=>{
        //pegando o conteudo do formulario e armazenando no Db
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo

        }).then( () => {
            //redirecionamento para quando o post for concluido com sucesso
            res.redirect('/')
        }).catch( (erro) => {
            res.send( 'houve um erro' + erro )
        })
    })

    //deletando posts do banco de dados e da pagina home
    app.get('/deletar/:id', (req,res)=>{
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            //aqui apos apagado vai redirecionar para a pagina home
            res.redirect('/')
        }).catch((erro) => {
            res.send('essa postagem nao existe' + erro)
        })
    })


app.listen('8081', ()=>{
    console.log('servidor rodando na porta 8081')
})
//impordanto express
const express = require('express')
const app = express()

//importando o model d para criar html apartir do JS
const handlebars = require('express-handlebars')

//=========================================================================
//config
    //template egine
    //aqui basicamente falamos pro express que queremos usar o handlebars com templet engine
    app.engine('handlebars', handlebars({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')
    
//================================================================================

//========================================================================
//conexão com banco de dados
    const Sequelize = require('sequelize')
    const sequelize =  new Sequelize('testes', 'root', '689568',{
        host: 'localhost',
        dialect: 'mysql'
    })
//=========================================================================

//Rotas
    app.get('/cadastros', (req,res)=>{
        res.render('form')
    })

//rota de recebimento(como no dormulario o metodo de envio esta como post
//aqui na rota tambem tem que ser alterado)
    app.post('/add', (req,res)=>{
        res.send('formulario recebido')
    })



app.listen('8081', ()=>{
    console.log('servidor rodando na porta 8081')
})
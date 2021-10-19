

//inportando o modulo que exportamos do db
const db = require('./db')

//criando tabela e duas colunas
const post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = post
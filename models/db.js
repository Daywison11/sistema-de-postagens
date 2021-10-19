//conexão com banco de dados
const Sequelize = require('sequelize')

const sequelize =  new Sequelize('postapp', 'root', '689568',{
    host: 'localhost',
    dialect: 'mysql'
})

//fazendo a exportação dos modulos com ligação do db
module.exports = {
    Sequelize,
    sequelize
}
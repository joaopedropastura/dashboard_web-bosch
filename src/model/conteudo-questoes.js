const Sequelize = require('sequelize');
const database = require('../config/db');

const conteudo = require('./conteudos');

const conteudoQuestao = database.define('Conteudo_Questao', 
{
    Conteudo_Questao_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
    
});

conteudoQuestao.belongsTo(conteudo,
    {
        constraint: true,
        foreignKey: 'Conteudo_ID'
    });

module.exports = conteudoQuestao;
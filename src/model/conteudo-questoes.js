const Sequelize = require('sequelize');
const database = require('../config/db');
const conteudo = require('./conteudos');
const questao = require('../model/questoes')

const conteudoQuestao = database.define('Conteudo_Questoes',
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

conteudoQuestao.belongsTo(questao,
{
    constraint: true,
    foreignKey: 'Questoes_ID'
});
    



module.exports = conteudoQuestao;
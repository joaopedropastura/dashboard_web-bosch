
const Sequelize = require('sequelize');
const database = require('../config/db');
const aluno = require('./alunos')
const prova = require('./provas');
// const conteudoQuestao = require('./conteudo-questoes');

const questoes = database.define('Questoes', 
{
    Questoes_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Nome: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Review: 
    {
        type: Sequelize.STRING(1000),
        allowNull: false
    },

    Correcao: 
    {
        type: Sequelize.STRING(1000),
        allowNull: false
    },

    Nota_Questao: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    Valor_Questao: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    }

});

questoes.belongsTo(prova,
{
    constraint: true,
    foreignKey: 'Prova_ID'
});

questoes.belongsTo(aluno,
    {
        constraint: true,
        foreignKey: 'EDV'
    });

// questoes.belongsTo(conteudoQuestao,
// {
//     constraint: true,
//     foreignKey: 'Conteudo_Questao_ID'
// });

module.exports = questoes;
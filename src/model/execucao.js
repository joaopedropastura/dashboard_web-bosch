
const Sequelize = require('sequelize');
const database = require('../config/db');
const turmas = require('./turmas');
const instrutores = require('./instrutores');
const disciplinas = require('./disciplinas');
const conteudos = require('./conteudos');

const execucao = database.define('Execucao', 
{
    Execucao_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Nome: 
    {
        type: Sequelize.STRING(100),
        allowNull: false
    }

});


execucao.belongsTo(turmas, 
{
    constraint: true, 
    foreignKey: 'Turma_ID'
});

execucao.belongsTo(instrutores, 
{
    constraint: true, 
    foreignKey: 'Instrutor_ID'
});

execucao.belongsTo(disciplinas, 
{
    constraint: true, 
    foreignKey: 'Disciplina_ID'
});

execucao.belongsTo(conteudos, 
    {
        constraint: true, 
        foreignKey: 'Conteudo_ID'
    });

module.exports = execucao;
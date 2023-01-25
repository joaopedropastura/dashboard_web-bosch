
const Sequelize = require('sequelize');
const database = require('../config/db');
const conteudos = require('./conteudos');
const questoes = require('./questoes');

const provas = database.define('Provas', 
{
    Prova_ID: 
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

    Nota: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    }

});

provas.belongsTo(conteudos, 
{
    constraint: true, 
    foreignKey: 'Conteudos_ID'
});
    
provas.belongsTo(questoes, 
{
    constraint: true, 
    foreignKey: 'Questoes_ID'
});

module.exports = provas;
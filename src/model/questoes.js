
const Sequelize = require('sequelize');
const database = require('../config/db');

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
    },

    Estado: 
    {
        type: Sequelize.STRING(20),
        allowNull: false
    }

});


module.exports = questoes;

const Sequelize = require('sequelize');
const database = require('../config/db');

const conteudos = database.define('Conteudos', {
    Conteudo_ID: 
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
    },

    Carga_Horaria: 
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Data_Inicio: 
    {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    Data_Fim: 
    {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = conteudos;
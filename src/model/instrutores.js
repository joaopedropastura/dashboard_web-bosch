const Sequelize = require('sequelize');
const database = require('../config/db');
const informacoes = require('./informacoes');

const instrutores = database.define('Instrutores',
{
    EDV:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    Nome:
    {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Senha:
    {
        type: Sequelize.STRING(15),
        allowNull: false
    }

});

instrutores.belongsTo(informacoes,
{
    constraint: true,
    foreignKey: 'Informacoes_ID'
});


module.exports = instrutores;
const { sequelize } = require('../config/db'); 
const { DataTypes } = require('sequelize');

const teamModel = sequelize.define('Equipes', {
    id_equipe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true
    },
    chefe_equipe: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Equipes', 
    timestamps: false 
});

module.exports = teamModel;
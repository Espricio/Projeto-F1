const Sequelize = require("sequelize");

// BANCO DE DADOS
const sequelize = new Sequelize('gerenciamento_f1', 'maycEspricio_SQLLogin_1', 'UserAdm123', {
    dialect: 'mssql',
    dialectModule: require('tedious'),
    host: 'gerenciamento_f1.mssql.somee.com',
    port: 1433, // Porta correta
    dialectOptions: {
        encrypt: true, // Se o SQL Server estiver configurado para usar SSL
        trustServerCertificate: true // Se o certificado não for confiável
    }
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso.');
    } catch (err) {
        console.error(`Erro ao conectar com o banco de dados: ${err}`);
    }
};

module.exports = { sequelize, connectToDatabase };
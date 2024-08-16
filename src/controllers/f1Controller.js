const f1TeamModel = require('../models/f1TeamModel');

const userController = {
    index: (req, res) => {
        try {
            res.render('pages/index');
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    listarEquipes: async (req, res) => {
        try {
            const equipe = await f1TeamModel.findAll();
            return res.render('pages/listar', { Equipes });
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    }
};

const verificaErro = (err) => {
    if (err.code === 'ECONNREFUSED') return 'Conexão com o servidor de banco de dados indisponível!';
    else return 'Ocorreu um erro ao processar sua solicitação!';
}

module.exports = userController;
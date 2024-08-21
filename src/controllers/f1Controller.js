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
            const equipes = await f1TeamModel.findAll();
            return res.render('pages/listarEquipes', { equipes });
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    criarEquipe: (req, res) => {
        try {
            res.render('pages/criarEquipe');
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    adicionarEquipe: async (req, res) => {
        try {
            const { nome, pais, chefe_equipe } = req.body;

            await f1TeamModel.create({ nome, pais, chefe_equipe });

            return res.redirect('/listarEquipes');
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    editarEquipe: async (req, res) => {
        try {
            const { id_equipe } = req.params;
            const equipe = await f1TeamModel.findByPk(id_equipe);
            if (!equipe) {
                return res.status(404).render('pages/pag_erro', { message: 'Equipe não encontrada!' });
            }
            return res.render('pages/editarEquipe', { data: equipe });
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    salvarEdicaoEquipe: async (req, res) => {
        try {
            const { id_equipe, nome, pais, chefe_equipe } = req.body;
            const equipe = await f1TeamModel.findByPk(id_equipe);
            if (!equipe) {
                return res.status(404).render('pages/pag_erro', { message: 'Equipe não encontrada!' });
            }
            await f1TeamModel.update({ nome, pais, chefe_equipe }, { where: { id_equipe } });

            return res.redirect('/listarEquipes');
        } catch (error) {
            console.log(error);
            let error_message = verificaErro(error);
            res.render('pages/pag_erro', { message: error_message });
        }
    },

    deletarEquipe: async (req, res) => {
        try {
            const { id_equipe } = req.params;
            const equipe = await f1TeamModel.findByPk(id_equipe);

            if (!equipe) {
                return res.status(404).render('pages/pag_erro', { message: 'Equipe não encontrada!' });
            }

            const result = await f1TeamModel.destroy({ where: { id_equipe } });

            if (result > 0) {
                return res.redirect('/listarEquipes');
            } else {
                return res.status(404).render('pages/pag_erro', { message: 'Erro ao excluir Equipe!' });
            }

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
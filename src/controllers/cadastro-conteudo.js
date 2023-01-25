const conteudo = require('../model/conteudo')

module.exports = {
    
    async ConteudoInsert(req, res){
        const dados = req.body;

        await conteudo.create({
            Nome: dados.nome,
            Turma_ID: dados.turma,
            Instrutor_ID: dados.instrutor,
            Disciplina_ID: dados.disciplina
        })
        res.redirect('/');
    }
}
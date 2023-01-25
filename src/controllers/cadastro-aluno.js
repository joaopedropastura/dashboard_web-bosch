const aluno = require('../model/alunos')

module.exports = {
    
    async alunoInsert(req, res){
        const dados = req.body;

        await aluno.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
            Turma_ID: dados.turma
        })
        res.redirect('/');
    }
}
const turma = require('../model/turmas')


module.exports = {
    
    async salaInsert(req, res){
        const dados = req.body

        await turma.create({
            Nome: dados.nome
        })
        res.redirect('/');
    }
}
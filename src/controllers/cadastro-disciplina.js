const disciplina = require('../model/disciplinas')


module.exports = {
    
    async DisciplinaInsert(req, res){
        const dados = req.body;

        await disciplina.create({
            EDV: dados.nome,
            Carga_Horaria: dados.carga_h,
            Data_Inicio: dados.data_init,
            Data_Fim: dados.data_fim
        })
        res.redirect('/');
    }
}
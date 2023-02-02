
const aluno = require('../model/alunos')
const instrutor = require('../model/instrutores')

module.exports = {
    async checkLogin(req,res){
        var flag = 0
        const dados = req.body
        var podeEntrar = false;
        if (dados.edv && dados.senha){
            const alunos = await aluno.findAll({
                raw: true,
                attributes: ["EDV", "Nome", "Senha"],
                
            })
            const instrutores = await instrutor.findAll({
                raw: true,
                attributes: ["EDV", "Nome", "Senha"],
                
            })
            alunos.forEach(ele => {
                if(dados.edv == ele.EDV && dados.senha == ele.Senha)
                {
                    podeEntrar = true
                    flag++
                }
            });
            instrutores.forEach(ele => {
                if(dados.edv == ele.EDV && dados.senha == ele.Senha)
                {
                    podeEntrar = true
            
                }
            });
            if(podeEntrar)
            {
                if(flag)
                res.redirect('/dash-board/' + dados.edv)
                else
                res.redirect('/avaliacoes')
            }
        }
        else{
            res.send('please enter email address and password details')
        }
    }
}
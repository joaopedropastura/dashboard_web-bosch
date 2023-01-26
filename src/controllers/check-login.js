
const aluno = require('../model/alunos')
const instrutor = require('../model/instrutores')

module.exports = {
    async checkLogin(req,res){
    
        const dados = req.body
        var podeEntrar = false;
        console.log(dados)
        if (dados.edv && dados.senha){
            const alunos = await aluno.findAll({
                raw: true,
                attributes: ["EDV", "Nome", "Senha"]
            })
            const instrutores = await instrutor.findAll({
                raw: true,
                attributes: ["EDV", "Nome", "Senha"]
            })

            alunos.forEach(ele => {
                if(dados.edv == ele.EDV && dados.senha == ele.Senha)
                {
                    podeEntrar = true

                }
            });
            instrutores.forEach(ele => {
                if(dados.edv == ele.EDV && dados.senha == ele.Senha)
                {
                    podeEntrar = true
                    
                }
            });
            if(podeEntrar)
                res.redirect('/profile')
        }
        else{
            res.send('please enter email address and password details')
        }
    }
}

const aluno = require('../model/alunos')
const instrutor = require('../model/instrutores')
module.exports = {
    async checkLogin(req,res){
    
        const dados = req.body
        console.log(dados)
        if (dados.edv && dados.senha){
            query = `
                SELECT * FROM Instrutores
                WHERE EDV = "${dados.edv}"
            `;

            database
        }
        else{
            res.send('please enter email address and password details')
        }
    }
}
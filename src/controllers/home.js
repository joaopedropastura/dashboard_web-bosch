const disciplina = require('../model/disciplinas')
const turma = require('../model/turmas')
const instrutor = require('../model/instrutores')
const aluno = require('../model/alunos')
const conteudo =  require('../model/conteudos')

module.exports =
{
    async pagInicialget(req, res)
    {
        res.render('../views/index')
    },

    async pagInicialPost(req, res)
    {
        res.render('../views/index')
    },

    async pagCadastro(req, res)
    {
        const disciplinas = await disciplina.findAll({
            raw: true,
            attributes: ['Disciplina_ID', 'Nome']
        })
        const instrutores = await instrutor.findAll({
            raw: true,
            attributes: ['EDV', 'Nome']
        })
        const turmas = await turma.findAll({
            raw: true,
            attributes: ['Turma_ID', 'Nome']
        })
        const conteudos = await conteudo.findAll({
            raw: true,
            attributes: ['Conteudo_ID', 'Nome']
        })
        res.render('../views/telas-instrutores/cadastro', {disciplinas, turmas, instrutores, conteudos})
    },

    async pagLogin(req, res)
    {
        res.render('../views/telas-gerais/login')
    },

    async pagDashBoard(req, res)
    {
        res.render('../views/telas-alunos/dasboard')
    },


    async pagAvaliacao(req, res)
    {
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['Turma_ID', 'Nome']
        })
        res.render('../views/telas-instrutores/avaliacao')
    }
}


// const turma = require('../model/turma');
const disciplina = require('../model/disciplinas')
const turma = require('../model/turmas')
const instrutor = require('../model/instrutores')
const aluno = require('../model/alunos')

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
        res.render('../views/telas-instrutores/cadastro', {disciplinas, turmas, instrutores})
    },

    async pagLogin(req, res)
    {
        res.render('../views/telas-gerais/login')
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

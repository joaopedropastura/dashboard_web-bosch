const disciplina = require('../model/disciplinas')
const conteudo = require('../model/conteudos')
const instrutor = require('../model/instrutores')
const aluno = require('../model/alunos')
const turma = require('../model/turmas')
const informacoes = require('../model/informacoes')
const aula = require('../model/aula')
const prova = require('../model/provas')
const questoes = require('../model/questoes')
const conteudo_questao = require('../model/conteudo-questoes')
const { Sequelize } = require('sequelize')

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
    
    async pagAvaliacao(req, res)
    {
        const disciplinas = await disciplina.findAll({
            raw: true,
            attributes: ['Disciplina_ID', 'Nome']
        })
        const turmas = await turma.findAll({
            raw: true,
            attributes: ['Turma_ID', 'Nome']
        })
        const provas = await prova.findAll({
            raw: true,
            attributes: ['Prova_ID', 'Nome', 'Disciplina_ID', 'Turma_ID']
        })

        res.render('../views/telas-instrutores/avaliacao', {disciplinas, turmas, provas})
    },

    async pagListaAlunos(req, res)
    {
        const provas = await prova.findAll({
            raw: true,
            attributes: ['Prova_ID', 'Nome', 'Disciplina_ID', 'Turma_ID']
        })
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['EDV', 'Nome']
        })
        res.render('../views/telas-instrutores/lista-alunos', {provas, alunos})
    },

    async pagProfileAluno(req, res)
    {
        res.render('../views/telas-alunos/profile-aluno')
    },

    async pagProfileInstrutor(req, res)
    {
        res.render('../views/telas-instrutores/profile-instrutor')
    },

    async pagProvaAluno(req,res)
    {
        res.render('../views/telas-instrutores/prova-alunos')
    }
}

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
        const instrutores = await instrutor.findAll({
            raw: true,
            attributes: ['EDV', 'Nome']
        })
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['EDV', 'Nome']
        })
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
        
		const questao = await questoes.findAll({
			raw: true,
            attributes: ['Questoes_ID', 'Nome', 'EDV', 'Review',  'Valor_Questao', 'Nota_Questao' ]
		})

        const conteudo_questoes = await conteudo_questao.findAll({
			raw: true,
            attributes: ['Conteudo_Questao_ID', 'Conteudo_ID', 'Questoes_ID' ]
		})
		const conteudos = await conteudo.findAll({
			raw: true,
            attributes: ['Conteudo_ID', 'Nome']
		})
        res.render('../views/telas-alunos/dash-board', {conteudos, conteudo_questoes, questao, provas, turmas, disciplinas, alunos, instrutores})
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

    async pagProfile(req, res)
    {
        res.render('../views/telas-gerais/profile')
    },

    async pagProvaAluno(req,res)
    {
        res.render('../views/telas-instrutores/prova-alunos')
    }
}

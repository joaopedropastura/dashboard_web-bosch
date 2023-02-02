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

    async pagDashBoard(req, res)
    {
        const EDV = req.params.edv
        const instrutores = await instrutor.findAll({
            raw: true,
            attributes: ['EDV', 'Nome']
        })
        const alunos = await aluno.findAll({
            raw: true,
            where: {EDV: EDV},
            attributes: ['EDV', 'Nome', 'Turma_ID']
        })
        const turmas = await turma.findAll({
            raw: true,
            where: {Turma_ID: alunos[0].Turma_ID},
            attributes: ['Turma_ID', 'Nome']
        })
        const aulas = await aula.findAll({
            raw: true,
            where: {Turma_ID: turmas[0].Turma_ID},
            attributes: ['Aula_ID', 'Turma_ID', 'Disciplina_ID', 'Conteudo_ID']
        })

        var listaDis = []
        for(let i=0; i < aulas.length; i++)
        {
            const disciplinas = await disciplina.findAll({
                raw: true,
                where: {Disciplina_ID: aulas[i].Disciplina_ID},
                attributes: ['Disciplina_ID', 'Nome'],
            })
            listaDis.push(disciplinas)
        }
        const provas = await prova.findAll({
            raw: true,
            where: {Turma_ID: alunos[0].Turma_ID},
            attributes: ['Prova_ID', 'Nome', 'Disciplina_ID', 'Turma_ID']
        })
        
		const questao = await questoes.findAll({
			raw: true,
            
            attributes: ['Questoes_ID', 'Nome', 'EDV', 'Review', 'Valor_Questao', 'Nota_Questao', 'Prova_ID' ]
            
		})
        const sla = await questoes.sum("Valor_Questao")
        const conteudo_questoes = await conteudo_questao.findAll({
			raw: true,
            attributes: ['Conteudo_Questao_ID', 'Conteudo_ID', 'Questoes_ID' ]
		})
		const conteudos = await conteudo.findAll({
			raw: true,
            attributes: ['Conteudo_ID', 'Nome']
		})

        var aux = []
        var result = []
        listaDis.map(obj => {
            if (aux.indexOf(obj[0].Disciplina_ID) === -1)
            {
                aux.push(obj[0].Disciplina_ID)
                result.push(obj[0])
            }
        });
        console.log(sla)
        // console.log(listaDis.filter((item, index) => listaDis.indexOf(item[index]) === index))
        // console.log(disciplinas)
        res.render('../views/telas-alunos/dash-board', {conteudos, conteudo_questoes, questao, provas, turmas, result, alunos, instrutores})
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

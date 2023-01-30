const disciplina = require('../model/disciplinas')
const conteudo = require('../model/conteudos')
const instrutor = require('../model/instrutores')
const aluno = require('../model/alunos')
const turma = require('../model/turmas')
const informacoes = require('../model/informacoes')
const aula = require('../model/aula')
const prova = require('../model/provas')
const questoes = require('../model/questoes')


module.exports = {

	async listaAlunosInfo(req, res){
		const dados = req.body
		console.log(dados)
		const provaID = await prova.findByPk(dados.Prova_ID);

		const provas = await prova.findAll({
			raw: true,
            attributes: ['Prova_ID', 'Nome', 'Disciplina_ID', 'Turma_ID']
		})
		const listaAlunos = await aluno.findAll({

			attributes: ['Nome', 'EDV', 'Turma_ID'],
			where: {Turma_ID: provaID.dataValues.Turma_ID},
			include: [{
				model: turma,
				required: true,
				attributes: ["Nome"]
			}]
		});
		res.render('../views/telas-instrutores/lista-alunos', {provaID, listaAlunos, provas});
	}
}
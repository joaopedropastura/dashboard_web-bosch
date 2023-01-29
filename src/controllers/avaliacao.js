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
		const turmaAlunos = await turma.findAll({
			raw: true,
			attributes: ['Turma_ID', 'Nome']
		});

		res.render('../views/telas-instrutores/lista-alunos', {turmaAlunos});
	}
}
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


module.exports = {

	async listaAlunosInfo(req, res){
		const dados = req.body
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
				attributes: ["Turma_ID", "Nome"]
			}]

		});
		res.render('../views/telas-instrutores/lista-alunos', {provaID, listaAlunos, provas});
	},

	async provaAlunosInfo(req, res){
		const dados = req.body;
		// console.log(dados)
		const provaID = req.params.id;
		// console.log(dados)
		const alunos = await aluno.findAll({
			raw: true,
			where: {EDV: dados.EDV},
			attributes: ["Nome", "EDV"]
		})
		const nomeProva = await prova.findByPk(provaID);

		const conteudos = await conteudo.findAll({
			raw: true,
            attributes: ['Conteudo_ID', 'Nome']
		})
		// console.log(alunos[0])
		res.render('../views/telas-instrutores/prova-alunos', {nomeProva, alunos, conteudos});
	},

    async questoesInsert(req, res){
        const dados = req.body
		console.log("oioioo")
		const provaID = req.params.id;
		console.log(dados)
		const nomeProva = await prova.findByPk(provaID);
		const alunos = await aluno.findAll({
			raw: true,
			where: {EDV: dados.edv},
			attributes: ["Nome", "EDV"]
		})
		const conteudos = await conteudo.findAll({
			raw: true,
            attributes: ['Conteudo_ID', 'Nome']
		})
        const questao = await questoes.create({
            Nome: dados.nome,
            Review: dados.review,
            Correcao: dados.correcao,
            Nota_Questao: dados.notas_questao,
            Valor_Questao: dados.valor_questao,
            Prova_ID: dados.prova,
			EDV: dados.edv
        });
		const q_conteudo = dados.conteudo
		console.log(q_conteudo)
		for (let i = 0; i < q_conteudo.length; i++) {
			await conteudo_questao.create({
				Conteudo_ID: q_conteudo[i],
				Questoes_ID: questao.Questoes_ID
			})
		}
		
		res.render('../views/telas-instrutores/prova-alunos', {nomeProva, alunos, conteudos});
    },

    async provasInsert(req, res){
        const dados = req.body;
        // console.log(dados)
        await prova.create({
            Nome: dados.nome,
            Disciplina_ID: dados.disciplina,
            Turma_ID: dados.turma,
            Recuperacao: dados.recuperacao == "false" ? false : true
        });
        res.redirect('/avaliacao');
    }

}
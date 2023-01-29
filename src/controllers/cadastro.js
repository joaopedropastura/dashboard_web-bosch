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

    async userInsert(req,res){
        const dados = req.body
        if(dados.cargo == "aluno")
        {
            await aluno.create({
                EDV: dados.edv,
                Nome: dados.nome,
                Senha: 'ETS' + dados.edv,
                Turma_ID: dados.turma
            })
        }
        else
        {
            await instrutor.create({
                EDV: dados.edv,
                Nome: dados.nome,
                Senha: 'ETS' + dados.edv,
            })
        }
        res.redirect('/cadastro');
    },

    async alunoInsert(req, res){
        const dados = req.body;

        await aluno.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
            Turma_ID: dados.turma
        })
        res.redirect('/cadastro');
    },

    async instrutor (req, res){

        const instrutores = await instrutor.findAll({ raw: true, attributes: ['Instrutor_ID', 'Nome'] });
        res.render('../views/telas-instrutores/cadastro', {instrutores});
    },

    async instrutoresInsert(req, res){
        const dados = req.body;
        await instrutor.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
        })
        res.redirect('/cadastro');
    },

    async AulaInsert(req, res){
        const dados = req.body;
        await aula.create({
            Conteudo_ID: dados.conteudo,
            Turma_ID: dados.turma,
            Instrutor_ID: dados.instrutor,
            Disciplina_ID: dados.disciplina,
            Carga_Horaria: dados.carga_h,
            Data_Inicio: dados.data_init,
            Data_Fim: dados.data_fim
        })
        res.redirect('/cadastro');
    },

    async InformacoesInsert(req, res){
        const dados = req.body;

        await informacoes.create({
            Email: dados.email,
            Telefone: dados.telefone,
            Skype: dados.skype,
            Github: dados.github,
            Foto: dados.foto
        })
        res.redirect('/cadastro');
    },

    async InstrutorInsert(req, res){
        const dados = req.body;
    },

    async ConteudoInsert(req, res){
        const dados = req.body;

        await conteudo.create({
            Nome: dados.nome,
        })
        res.redirect('/cadastro');
    },

    async DisciplinaInsert(req, res){
        const dados = req.body;
        console.log(dados)
        await disciplina.create({
            Nome: dados.nome
        });
        res.redirect('/cadastro');
    },

    async turmaInsert(req, res){
        const dados = req.body

        await turma.create({
            Nome: dados.nome
        });
        res.redirect('/cadastro');
    },

    async questoesInsert(req, res){
        const dados = req.body

        await questoes.create({
            Nome: dados.nome,
            Review: dados.review,
            Correcao: dados.correcao,
            Nota_Questao: dados.notas_questao,
            Valor_Questao: dados.valor_questao,
            Estado: dados.estado,
            Prova_ID: dados.prova,
            Conteudos_Questao_ID: dados.conteudos_questao
        });
        res.redirect('/');
    },

    async provasInsert(req, res){
        const dados = req.body;
        console.log(dados)
        await prova.create({
            Nome: dados.nome,
            Disciplina_ID: dados.disciplina,
            Turma_ID: dados.turma,
            Recuperacao: dados.recuperacao == "false" ? false : true
        });
        res.redirect('/avaliacao');
    }
}
const disciplina = require('../model/disciplinas')
const conteudo = require('../model/conteudos')
const instrutor = require('../model/instrutores')
const aluno = require('../model/alunos')
const turma = require('../model/turmas')
const informacoes = require('../model/informacoes')
const execucao = require('../model/execucao')

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
        res.redirect('/');
    },

    async alunoInsert(req, res){
        const dados = req.body;

        await aluno.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Senha: 'ETS' + dados.edv,
            Turma_ID: dados.turma
        })
        res.redirect('/');
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
        res.redirect('/');
    },

    async ExecucaoInsert(req, res){
        const dados = req.body;

        await execucao.create({
            Conteudo_ID: dados.conteudo,
            Turma_ID: dados.turma,
            Instrutor_ID: dados.instrutor,
            Disciplina_ID: dados.disciplina
        })
        res.redirect('/');
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
        res.redirect('/');
    },

    async ConteudoInsert(req, res){
        const dados = req.body;

        await conteudo.create({
            Nome: dados.nome,
        })

        res.redirect('/');
    },

    async DisciplinaInsert(req, res){
        const dados = req.body;

        await disciplina.create({
            Nome: dados.nome,
            Carga_Horaria: dados.carga_h,
            Data_Inicio: dados.data_init,
            Data_Fim: dados.data_fim
        });
        res.redirect('/');
    },

    async turmaInsert(req, res){
        const dados = req.body

        await turma.create({
            Nome: dados.nome
        });
        res.redirect('/');
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

        await provas.create({
            Nome: dados.nome,
            Nota: dados.nota,
            Disciplina_ID: dados.disciplina,
            Aluno_ID: dados.edv,
            Recuperacao: dados.recuperacao
        });
        res.redirect('/');
    }
}




var turma = document.getElementById('cadastroTurma');
var usuario = document.getElementById('cadastroUsuario');
var disciplina = document.getElementById('cadastroDisciplina');
var conteudo = document.getElementById('cadastroConteudo');

const showTurma = () =>
{
    turma.style.display = 'flex';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
}

const showUsuario = () => 
{
    turma.style.display = 'none';
    usuario.style.display = 'flex';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
}

  const showDisciplina = () => 
{
    turma.style.display = 'none';
    usuario.style.display = 'none';
    disciplina.style.display = 'flex';
    conteudo.style.display = 'none';
}

  const showConteudo = () => 
{
    turma.style.display = 'none';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'flex';
}

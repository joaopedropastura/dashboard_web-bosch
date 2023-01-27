var turma = document.getElementById('cadastroTurma');
var usuario = document.getElementById('cadastroUsuario');
var disciplina = document.getElementById('cadastroDisciplina');
var conteudo = document.getElementById('cadastroConteudo');

const showTurma = () =>
{
  console.log(turma, usuario, disciplina, conteudo)
  if(turma.classList.contains('show'))
  {
    turma.classList.replace('show', 'hidden');
    usuario.classList.replace('hidden', 'show');
    disciplina.classList.replace('hidden', 'show');
    conteudo.classList.replace('hidden', 'show');
  } 
}

const showUsuario = () => 
{
    console.log(turma, usuario, disciplina, conteudo)
    if(usuario.classList.contains('show'))
    {
      turma.classList.replace('hidden', 'show');
      usuario.classList.replace('show', 'hidden');
      disciplina.classList.replace('hidden', 'show');
      conteudo.classList.replace('hidden', 'show');
    } 
}

  const showDisciplina = () => 
{
    console.log(turma, usuario, disciplina, conteudo)
    if(turma.classList.contains('show'))
    {
      turma.classList.replace('hidden', 'show');
      usuario.classList.replace('hidden', 'show');
      disciplina.classList.replace('show', 'hidden');
      conteudo.classList.replace('hidden', 'show');
    } 
}

  const showConteudo = () => 
{
    console.log(turma, usuario, disciplina, conteudo)
    if(turma.classList.contains('show'))
    {
      turma.classList.replace('hidden', 'show');
      usuario.classList.replace('hidden', 'show');
      disciplina.classList.replace('hidden', 'show');
      conteudo.classList.replace('show', 'hidden');
    } 
}

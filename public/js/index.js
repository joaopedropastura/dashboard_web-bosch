var turma = document.getElementById('cadastroTurma');
var usuario = document.getElementById('cadastroUsuario');
var disciplina = document.getElementById('cadastroDisciplina');
var conteudo = document.getElementById('cadastroConteudo');
var aula = document.getElementById('cadastroAula')

const showTurma = () =>
{
    turma.style.display = 'flex';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
    aula.style.display = 'none';
}
const showAula = () =>
{
    turma.style.display = 'none';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
    aula.style.display = 'flex';

}

const showUsuario = () =>
{
    turma.style.display = 'none';
    usuario.style.display = 'flex';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
    aula.style.display = 'none';

}

  const showDisciplina = () =>
{
    turma.style.display = 'none';
    usuario.style.display = 'none';
    disciplina.style.display = 'flex';
    conteudo.style.display = 'none';
    aula.style.display = 'none';

}

  const showConteudo = () =>
{
    turma.style.display = 'none';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'flex';
    aula.style.display = 'none';

}

function viewTurma(event){
    const isAdm = event.target.value
    const turmaInput = document.getElementById("turma")
    if(isAdm === "adm"){
        turmaInput.style.display = 'none';
    }
    else{
        turmaInput.style.display = 'block';
    }
}

function viewNome(){
    // alert("alo")
}


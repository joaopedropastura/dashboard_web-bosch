var turma = document.getElementById('cadastroTurma');
var usuario = document.getElementById('cadastroUsuario');
var disciplina = document.getElementById('cadastroDisciplina');
var conteudo = document.getElementById('cadastroConteudo');
var aula = document.getElementById('cadastroAula')

const showTurma = (id) =>
{
    turma.style.display = 'flex';
    usuario.style.display = 'none';
    disciplina.style.display = 'none';
    conteudo.style.display = 'none';
    aula.style.display = 'none';

    document.getElementsById(id).style.borderBottom = "3px solid render";
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

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
function buttonClicked() 
{
    this.style.borderStyle = (this.style.borderStyle!=='inset' ? 'inset' : 'outset');
}

// function viewNome(){
//     // alert("alo")
// }

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

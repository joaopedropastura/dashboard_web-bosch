links de inspiração:

    https://www.creative-tim.com/product/material-dashboard-dark?partner=114912

EXCALIDRAW:

    https://excalidraw.com/#json=BE1VXBPCHyBK4vCvrzMKN,xaL87ZUoq2u0bPaR96ccZw


LINKS PARA AJUDAR NOS GRAFICOS:

    https://canvasjs.com/
    https://d3js.org/

video bala conexao:

    https://www.youtube.com/watch?v=_OeuPAb9bhU&ab_channel=Celke


login video:

    https://www.youtube.com/watch?v=e5yZKTADxfk

    repo lucas
    https://github.com/fortunato-sply/bosch-workspeak/blob/front/views/login.js

login page inspiracao:

    https://dribbble.com/shots/19133985-Sign-Up-Page-UI

    https://dribbble.com/shots/17080426-Log-in-page-Untitled-UI

site oficial de estilos web bosch

    https://boschddm.com/project/menus/


icones

    https://icons8.com.br/icons/set/home

graficos

    https://github.com/d3/d3/wiki/Gallery#basic-charts


ALTERAR A TABELA de questoes para receber o id do aluno tb


join:

    select a.EDV, a.Nome, t.Nome as Turma, d.Nome as Disciplina, p.Nome as Prova, p.Recuperacao from Alunos a
        inner join Turmas t on a.Turma_ID = t.Turma_ID
        inner join Aulas u on u.Turma_ID = t.Turma_ID
        inner join Disciplinas d on d.Disciplina_ID = u.Disciplina_ID
        inner join Provas p on p.Disciplina_ID = d.Disciplina_ID
        where p.Prova_ID = 4
        group by a.EDV, a.Nome, t.Nome, d.Nome, p.Nome, p.Recuperacao


    select * from Alunos a
        inner join Questoes q on q.Conteudo_Questao_ID = a.EDV
        inner join Provas p on p.Prova_ID = q.Prova_ID
        where p.Prova_ID = 4 and a.EDV = 4 

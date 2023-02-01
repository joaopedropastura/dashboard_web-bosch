
function getDados(conteudos, conteudo_questao, questao, provas, turmas, disciplinas, alunos, instrutores)
{	
	
	// console.log(conteudos, conteudo_questao, questao, provas, turmas, disciplinas, alunos, instrutores)
	const joao =  d3.select(".box-content")
					.selectAll('p')
					.data(alunos)
					.enter()
					.append('p')
					.text(dta => dta.Nome);

	console.log(joao);

}
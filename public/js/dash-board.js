
function getDados(conteudos, conteudo_questao, questao, provas, turmas, resultDis, alunos, instrutores, SumValorQuestao, SumNotaQuestao)
{	
	console.log(resultDis, questao, provas,SumNotaQuestao, SumValorQuestao)
	// console.log(conteudos, conteudo_questao, questao, provas, turmas, disciplinas, alunos, instrutores)
	const container = d3.select(".graphics")
						.classed('graph01', true)

	const bars = container
			.selectAll('.bar')
			.data([alunos, questao])
			.enter()
			.append('div')
			.classed('bar', true)
			.style('width', '20px')
			.style('height', data => (alunos.EDV / 10000) + 'px')
	console.log(joao);

}
const getDis = $("#inputDis option:selected").val()
// console.log(getDis)
function getDados(conteudos, conteudo_questao, questao, provas, turmas, resultDis, alunos, instrutores, SumValorQuestao, SumNotaQuestao)
{
	// console.log(resultDis, questao, provas,SumNotaQuestao,SumValorQuestao)
	// console.log(conteudos, conteudo_questao, questao, provas, turmas, disciplinas, alunos, instrutores)
	if(getDis != 'invalido')
	{
		const disProva = provas.filter((dis) => dis.Disciplina_ID  == getDis)
		const disQuestoes = disProva.map((prova) => questao.filter((quest) => quest.Prova_ID == prova.Prova_ID))
		questao = disQuestoes[0]
	}



	const xScale = d3
				.scaleBand()
				.domain(questao.map((dataPoint) => dataPoint.Questoes_ID))
				.rangeRound([0, 400])
				.padding(0.1)

	const yScale = d3.scaleLinear().domain([0, 11]).range([450, 0])

	const container = d3.select("svg")
						.classed('graph01', true)
	console.log(resultDis)
	const bars = container
			.selectAll('.bar')
			.data(questao)
			.enter()
			.append('rect')
			.classed('bar', true)
			.attr('width', xScale.bandwidth())
			.attr('height', (dta) => 450 - yScale(dta.Nota_Questao))
			.attr('x', dta => xScale(dta.Questoes_ID))
			.attr('y', dta => yScale(dta.Nota_Questao))
	// console.log(joao);

}



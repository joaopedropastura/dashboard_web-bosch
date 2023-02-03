const flagDis = $("#inputDis option:selected").val()
// console.log(getDis)
function getDados(conteudos, conteudo_questao, questao, provas, turmas, resultDis, alunos, instrutores, SumValorQuestao, SumNotaQuestao)
{
	if(flagDis != 'invalido')
	{
		const disProva = provas.filter((dis) => dis.Disciplina_ID  == flagDis)
		const disQuestoes = disProva.map((prova) => questao.filter((quest) => quest.Prova_ID == prova.Prova_ID))
		questao = disQuestoes[0]
	}
	const apto = questao.filter((quest) => (quest.Nota_Questao/quest.Valor_Questao) *10 >= 8)
	const emDesenvolvimento = questao.filter((quest) => (quest.Nota_Questao/quest.Valor_Questao)*10 < 8 && (quest.Nota_Questao/quest.Valor_Questao)*10 >= 5)
	const inapto = questao.filter((quest) => (quest.Nota_Questao/quest.Valor_Questao)*10 < 5)
	
	const xScale = d3
				.scaleBand()
				.domain(questao.map((dataPoint) => dataPoint.Questoes_ID))
				.rangeRound([0, 400])
				.padding(0.1)

	const yScale = d3.scaleLinear().domain([0, 11]).range([300, 0])

	const barChart = d3.select("svg")
						.classed('graph01', true)
	const bars = barChart
			.selectAll('.bar')
			.data(questao)
			.enter()
			.append('rect')
			.classed('bar', true)
			.attr('width', xScale.bandwidth())
			.attr('height', (dta) => 450 - yScale(dta.Nota_Questao))
			.attr('x', dta => xScale(dta.Questoes_ID))
			.attr('y', dta => yScale(dta.Nota_Questao))

	

// set the dimensions and margins of the graph
const width = 510,
    height = 290,
    margin = 10;
// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin
// append the svg object to the div called 'my_dataviz'
const svg = d3
				.select("#dunutChart")
				.append("svg")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", `translate(${width/1.6},${height/2})`);
// Create dummy data
const data = {Inapto: inapto.length, Apto: apto.length, "Em desenvolvimento":emDesenvolvimento.length}
// set the color scale
const color = d3.scaleOrdinal()
  .domain([6, 7, 5])
  .range(d3.schemeDark2);
// Compute the position of each group on the pie:
const pie = d3.pie()
  .sort(null) // Do not sort group by size
  .value(d => d[1])
const data_ready = pie(Object.entries(data))
// The arc generator
const arc = d3.arc()
  .innerRadius(radius * 0.5)         // This is the size of the donut hole
  .outerRadius(radius * 0.8)

// Another arc that won't be drawn. Just for labels positioning
const outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('allSlices')
  .data(data_ready)
  .join('path')
  .attr('d', arc)
  .attr('fill', d => color(d.data[0]))
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

// Add the polylines between chart and labels:
svg
  .selectAll('allPolylines')
  .data(data_ready)
  .join('polyline')
    .attr("stroke", "black")
    .style("fill", "none")
    .attr("stroke-width", 1)
    .attr('points', function(d) {
      const posA = arc.centroid(d) // line insertion in the slice
      const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
      const posC = outerArc.centroid(d); // Label position = almost the same as posB
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC]
    })

// Add the polylines between chart and labels:
svg
  .selectAll('allLabels')
  .data(data_ready)
  .join('text')
    .text(d => d.data[0])
    .attr('transform', function(d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
    })
    .style('text-anchor', function(d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
    })
	.style('font-size', '13px')
}



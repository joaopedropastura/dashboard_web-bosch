// // import {DonutChart} from "@d3/donut-chart"

// console.log("alo")

// // population = Array(18) [
// // 	{name: "<5", value: 19912018},
// // 	{name: "5-9", value: 20501982},
// // 	{name: "10-14", value: 20679786},
// // 	{name: "15-19", value: 21354481},
// // 	{name: "20-24", value: 22604232},
// // 	{name: "25-29", value: 21698010},
// // 	{name: "30-34", value: 21183639},
// // 	{name: "35-39", value: 19855782},
// // 	{name: "40-44", value: 20796128},
// // 	{name: "45-49", value: 21370368},
// // 	{name: "50-54", value: 22525490},
// // 	{name: "55-59", value: 21001947},
// // 	{name: "60-64", value: 18415681},
// // 	{name: "65-69", value: 14547446},
// // 	{name: "70-74", value: 10587721},
// // 	{name: "75-79", value: 7730129},
// // 	{name: "80-84", value: 5811429},
// // 	{name: "≥85", value: 5938752}
// // ]
// function main(){
// 	var data = [2,3,6,10,22]


// 	var svg = d3.select("svg"),
// 	width = svg.attr('width'),
// 	height = svg.attr('height'),
// 	radius = Math.min(width, height)/2

// 	var g = svg.append('g').attr('transform', 'translate('+ width /2 + ')')

// 	var color = de3.scaleOrdinal(['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff'])

// 	var pie = d3.pie()

// 	var arc = d3.arc()
// 					.innerRadius(0)
// 					.outerRadius(radius);
// 	var arcs = g.selectAll('arc')
// 					.data(pie(data))
// 					.enter().append('g')
// 					.attr('class', 'arc')

// 	arcs.append('path')
// 				.attr('fill'), function(d,i){
// 					return color(i)
// 				}
// 				.attr(d, arc);
// 	console.log(pie(data))
// }

// main()



d3.select('div')
	.selectAll('p')
	.selectAll

console.log(d3);
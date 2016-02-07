
//var data = [4, 8, 15, 16, 23, 42];
//Callable functions
function circos()
{
	document.getElementById("demo").innerHTML = Date();
}

function hello(){
	d3.selectAll("section").append("div").html("Hello, world from a chain method");
}

function nonsvg(data){//this doesn't exist anymore
	var data = data	
	var x = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range([0, 420]);
		
	d3.select(".chart")//Select class chart
		.selectAll("div")//Select all div elements
			.data(data)//Assign data to the data
			.enter()//We know the selection is empty, so we "enter" the assigned data
		.append("div").style("width", function(d){return x(d) + "px"}).text(function(d) { return d;});
		
}	

function svgbargraph(data){
	var data = data;
	var width = 420, barHeight = 20;
	
	var x = d3.scale.linear()
		.domain[0, d3.max(data)])
		.range([0, width]);
	
	var chart = d3.select(".chart")
		.attr("width", width)
		.attr("height", barHeight * data.length);
	
	var bar = chart.selectAll("g")
		.data(data).enter()
		.append("g")
		.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")";});
		
	bar.append("rect")
	.attr("width", x)
	.attr("height", barHeight - 1);	
	
	bar.append("text")
		.attr("x", function(d){ return x(d) - 3;})
		.attr("y", barHeight / 2)
		.attr("dy", ".35em")
		.text(function(d) { return d; });
}

//Driver program
//hello();
//svgbargraph(data)	
//nonsvg()
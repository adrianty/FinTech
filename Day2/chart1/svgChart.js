function myFunction() {

var data = [4, 8, 15, 16, 23, 42];
var svg = d3.select("body")
  .append('svg')
  .attr("width",500)
  .attr("height",200);

svg.selectAll("rect")
  .data(data)
  .enter().append("rect")
  .attr("transform",function(d, i) { return "translate("+20+","+i*25+")"  })
  .attr("fill","blue")
  .attr("height",20)
  .attr("width", function(d) { return d * 10 + "px"; });

svg.selectAll("text")
.data(data)
.enter().append("text")
.attr("transform",function(d, i) { return "translate(0,"+Number(i*25+15)+")" })
.attr("fill",'red')
.text(function(d) { return d  });

/*Transition */
var t = d3.transition()
   .delay(2000).duration(2000);
d3.selectAll("rect")
   .transition(t)
   .style("fill", "red");
   
}

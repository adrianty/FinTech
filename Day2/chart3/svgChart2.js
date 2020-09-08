function myFunction() {

  var svg = d3.select("svg"),
  width = svg.attr("width"),
  height = svg.attr("height"),
  radius = Math.min(width, height) / 2;
  
  //The <g> SVG element is a container used to group other SVG elements.
  var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// set the color scale  
  var color = d3.scaleOrdinal([
        'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
     ]);

  // Compute the position of each group on the pie:   
  var pie = d3.pie().value(function(d) { 
        return d.amt; 
     });
  //radius for the arc   
  var path = d3.arc()
        .outerRadius(radius - 10).innerRadius(0);
  
  //radius for the label      
  var label = d3.arc()
        .outerRadius(radius).innerRadius(radius - 80);
  
        
  d3.csv("expenses.csv", function(data) {
    
      console.log(data);
   
    /*   if (error) {
           throw error;
        }
      */ 
      
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      var arc = g.selectAll(".arc")
           .data(pie(data))
           .enter()
           .append("g")
           .attr("class", "arc");

      arc.append("path")
           .attr("d", path)
           .attr("fill", function(d) { return color(d.data.items); });

           //console.log(arc);
    
      arc.append("text").attr("transform", function(d) { 
           return "translate(" + label.centroid(d) + ")"; 
   })
        
        .text(function(d) { return d.data.items; });
        
  });  
     
   svg.append("g")
        .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
        .append("text").text("Expenses this Month - July 2020")
        .attr("class", "title")
  
}
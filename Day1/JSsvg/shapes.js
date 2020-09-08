//Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

//Draw the Circle
var circle = svgContainer.append("circle")
                         .attr("cx", 30)
                         .attr("cy", 30)
                         .attr("r", 20);

//Drwa the Rectangle
var rectangle = svgContainer.append("rect")
                         .attr("x", 50)
                         .attr("y", 50)
                         .attr("width", 50)
                         .attr("height", 100);                        
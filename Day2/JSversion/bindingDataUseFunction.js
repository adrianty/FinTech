//Binding DATA to DOM element - SIMPLE Example
//assume the body is empty
var theData = [ 1, 2, 3 ]

var a = d3.select("body").selectAll("p")   //returns empty selection 
  .data(theData)  // creates 3 empty placeholders as there are three data items 
  .enter() // gives us reference/pointer to manipulate 3 placeholders. Using the reference we can append, insert and select 
  .append("p")  //appending <p></p> to the references
  .text( function (d) { return d; } );  //adding hello to the paragraph text


   
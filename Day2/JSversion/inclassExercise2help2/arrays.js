
var myArray = ["ABS Bank", 7000.00, true, 'Savings Account']
// var myPara = document.getElementById("emptyP");
// myPara.innerHTML = myArray[0] + " , " + myArray[1]; 
var a = d3.select("body").selectAll("p")   //returns empty selection 
  .data(myArray)  // creates 4 empty placeholders as there are three data items 
  .enter() // gives us reference/pointer to manipulate 3 placeholders. Using the reference we can append, insert and select 
  .append("p")  //appending <p></p> to the references
  .text( function (d) { return d; } );  //adding ARRAY data to the paragraph text
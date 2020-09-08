//Some essential string object methods 
var myStr = "I'm feeling great.";
var l = myStr.length; 
console.log("charater count:" + l);
console.log(myStr[2]);   //m
console.log(myStr[4]); //f

var subStr1 = myStr.slice(4,11);  // returns starting position and up to (but not including) the ending position 
var subStr2 =  myStr.slice(12); //returns part of the string from position 10
console.log(subStr1);
console.log(subStr2);
var p1 = myStr.indexOf('feel');//returns 4, ie the substring is at pos 10
var p2 = myStr.indexOf('test');// returns -1, which means not found 
console.log(p1 + ", " +p2)

console.log(myStr.replace('feel','game')) 
console.log(myStr.toLowerCase());//convert entire string to lowercase
console.log(myStr.toUpperCase());//convert entire string to uppercase


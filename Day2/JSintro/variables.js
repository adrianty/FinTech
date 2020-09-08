/* variables, numsbers, strings, mixed type operations, 
template literals, Boolean, semicolon, LET/VAR, case-sensitive, comments */
var a = 10;  //a is a name for memory location
let b = 20.5;
let givenName = "James"
var lastName = 'LIM'
var myText = "I'm feeling great.";
a = 20;
var c;
console.log(c); //undefined!
var d = null;
//console.log(D);  //JS is case sensitive
console.log(d);
c = a+b;
d = a + lastName
const e= 10;  //constant
//e = a+b;
let f = e < b;
let g = f + 1;
console.log(`Hello ${givenName}`);  //
console.log("Hello " + givenName); 
console.log(`value of a is ${a}, value of b is ${b}, value of c is ${c}, value of d is ${d}, value of e is ${e}`);
console.log(`value of f is ${f}, value of g is ${g}`);
console.log("I'm " + givenName + " " + lastName + ". " + myText);

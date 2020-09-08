/* A short demo for arrays */
var myArray = ["ABS Bank", 7000.00, true, 'Savings Account'];
console.log("Your bank: " + myArray[0]);
console.log('You have mede a transaction today: ' + myArray[2]);
console.log('Array size:' + myArray.length);
//Arrays can contain arrays as members. (2D arrays - Table)
var grocery_list = [[5,'egg'],[10,'bread'],[12,'milk']];
 

console.log(grocery_list[2][1]); // returns 'milk', 2nd item of 3rd array 

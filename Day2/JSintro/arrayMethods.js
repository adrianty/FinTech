var names = ['Tom','Peter','Mary'];
var name_string = names.join(',');
console.log(name_string);

myArray_string = "ABS Bank, 7000.00, true, Savings Account";
var accDetails = myArray_string.split(','); 
console.log(accDetails);
console.log("My account balance is: $" + accDetails[1]);

//add/delete at the end
console.log("pop :"); names.pop(); console.log(names);
console.log("push :"); names.push('James'); console.log(names);

//add at the end and delete from the front
console.log("shift :"); names.shift(); console.log(names);
console.log("unshift :"); names.unshift('Lim'); console.log(names);
//add/delete at middle
console.log(names.splice(1, 1, ["Lim", "jenny"]));




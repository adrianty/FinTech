//function without argument
function depositIntRates() {
    console.log("3% for first $10000");
    console.log("3.5% for amount greater than 10000");
 }
 depositIntRates();
 
 //function with arguments
 function calcInterest(amount) {  5000
    var interest = 0;
    var balance = 0;
    if (amount > 10000) {
            balance = amount - 10000; 
    }
    int = 10000 * .03 + balance * 0.035;
    return (int);
 }

 var output = calcInterest(20000);
 console.log(output);

 

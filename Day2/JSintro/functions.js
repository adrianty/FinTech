//let a = 10; defining a funtion has similar syntax
let depositIntRates = function() {
    console.log("3% for first $10000");
    console.log("3.5% for amount greater than 10000");
}
depositIntRates();

let futureValue = function(principle, rate, years, ci =2) { //ci - Number of Times interest is Compounded per period (or year)
    rate = rate/100;
    return (principle * (1 + rate/ci)**(ci * years));
}
var ans = futureValue(10000, 3, 5, 1).toFixed(2);
console.log(ans);

var a = 10.32324;
console.log(a/2);
console.log((a/2).toFixed(2));
//console.log(b);

let futureValueAF = (principle, rate, years, ci =2) => { //Arrow Function 
    rate = rate/100;
    return (principle * (1 + rate/ci)**(ci * years));
}
console.log(futureValueAF(10000, 3, 5, 1).toFixed(2));


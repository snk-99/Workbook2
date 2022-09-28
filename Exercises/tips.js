//Exercise 1

// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;

// calculations
var totalDue = foodCost + tax + tip;

// Template literal
// `string text ${expression} string text`
console.log(`Food cost is ${foodCost} and tax is ${tax}`);

//.toFixed adds two digits to the right of the decimal point
console.log(`Tip is ${tip.toFixed(2)}`);
console.log(`Total due is ${totalDue}`);

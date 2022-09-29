"use strict"

// taxe withholds

var monthlyIncome = 8000;
var annualSalary = monthlyIncome * 12;
var monthlyWithholds = monthlyIncome * .23;
var annualWithholds = annualSalary * .23;

console.log(`My monthly income: ${monthlyIncome}`)
console.log(`My monthly withhold: ${monthlyWithholds.toFixed(2)}`)
console.log(`My annual salary: ${annualSalary}`)
console.log(`My annual withhold: ${annualWithholds.toFixed(2)}`)




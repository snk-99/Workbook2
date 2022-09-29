var payRate = 13.50;
var hoursWorked = 40;
var overTime;

if (hoursWorked >= 40) {
    overTime = payRate * 1.5
    console.log(overTime)
} else if (hoursWorked <= 20) {
    console.log('under40')
}


// console.log(`Overtime pay: ${overTime}`)
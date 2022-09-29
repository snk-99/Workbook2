"use strict"

// switch case
let departmentCode = 12;
let departmentName;

switch (departmentCode) {
    case 0:
        departmentName = "Ceo"
        break;
    case 1:
        departmentName = "Marketing"
        break;
    case 10:
        departmentName = "Accounting"
        break;
    case 12:
        departmentName = "Legal"
        break;
    case 18:
        departmentName = "IT"
        break;
    case 12:
        departmentName = "Customer"
        break;

    default:
        break;
}

console.log(departmentName);




// if  statement
let dCode = 22;
let dName;


if (dCode == 20) {
    dName = "App dev"
} else if (dCode == 22) {
    dName = "Cybersecurity"
} else if (dCode == 24) {
    dName = "UX/UI"
} else {
    dName = "CEO"
}
console.log(dName);
"use strict";

window.onload = init;

function init() {
    const addBtn = document.getElementById("addBtn");
    const subBtn = document.getElementById("subBtn");
    const multBtn = document.getElementById("multBtn");
    const divideBtn = document.getElementById("divideBtn");
    const answer = document.getElementById("answer");


    addBtn.onclick = onaddBtnclicked;
    subBtn.onclick = onsubBtnclicked;
    multBtn.onclick = onmultBtnclicked;
    divideBtn.onclick = ondivideBtnclicked;
}

// adding function 
function onaddBtnclicked() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    //Number() converts string input into a number
    const add = Number(number1.value) + Number(number2.value);

    let message = `Answer:${add}`

    answer.innerText = message

    console.log(add);
}

// subtract function 
function onsubBtnclicked() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    // The Math.abs() function returns the absolute value of a number.
    const subtract = Math.abs(Number((number1.value) - (number2.value)));
    let message = `Answer:${subtract}`

    answer.innerText = message

    console.log(subtract);
}

// multiply function 
function onmultBtnclicked() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");


    const multiply = Number((number1.value) * (number2.value));
    let message = `Answer:${multiply}`

    answer.innerText = message

    console.log(multiply);
}


// divide function 
function ondivideBtnclicked() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    const divide = Number((number1.value) / (number2.value));
    let message = `Answer:${divide}`

    answer.innerText = message

    console.log(divide);
}
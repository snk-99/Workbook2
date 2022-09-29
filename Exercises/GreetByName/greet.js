"use strict";

window.onload = init;

function init() {
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    const name = document.getElementById("name");

    // .value used for inputs 
    alert(`Hello user ${name.value}`);
}

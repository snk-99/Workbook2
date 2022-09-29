"use strict"

// javascript function example
// function defined 
function showGreetingInConsole() {
    //.document.getElementById(""") <- js method
    const messageDiv = document.getElementById("messageDiv");
    //.innerHTML <- js property
    messageDiv.innerHTML = "<h1>Hello World!</h1>";
    console.log(messageDiv);
}
// invoking the function
showGreetingInConsole();


function button() {
    const btn = document.getElementById("btn");
    // .innerHTML used for <P> and <div>
    btn.innerHTML = "<p>submit</p>";
}

button();
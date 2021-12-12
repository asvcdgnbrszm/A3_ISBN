const { checkISBN } = require("./script.js");

const trigger = document.getElementById("btnStart");

trigger.addEventListener('click', () => {

    //const isbnString = document.querySelector("#inputIsbn").value;
    const outDiv = document.querySelector('#outDiv');

    result = checkISBN('1111111112',2);

    if (result) { 
        outDiv.innerHTML = 'Die ISBN-Nummer ist korrekt.'
        outDiv.style.color = 'green'
    } else {
        outDiv.innerHTML = 'Die ISBN-Nummer ist falsch.'
        outDiv.style.color = 'red'
    } 
})
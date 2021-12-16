const { checkISBN } = require("./script.js");

const trigger = document.getElementById("btnStart");

trigger.addEventListener('click', () => {

    const isbnString = document.querySelector("#inputIsbn").value;
    const outDiv = document.querySelector('#outDiv');

    //console.log(isbnString)

    result = checkISBN(isbnString);

    if (result) { 
        outDiv.innerHTML = 'Die ISBN-Nummer ist korrekt.'
        outDiv.style.color = 'green'
    } else {
        outDiv.innerHTML = 'Die ISBN-Nummer ist falsch.'
        outDiv.style.color = 'red'
    } 
})
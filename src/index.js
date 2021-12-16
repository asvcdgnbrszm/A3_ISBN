const { checkISBN } = require("./script.js");

const trigger = document.getElementById("btnStart");
const inputIsbn = document.querySelector("#inputIsbn");
const outDiv = document.querySelector('#outDiv');

trigger.addEventListener('click', () => {

    const isbnString = inputIsbn.value;
    
    result = checkISBN(isbnString);

    if (result) { 
        outDiv.innerHTML = 'Die ISBN-Nummer ist korrekt.'
        outDiv.style.color = 'green'
    } else {
        outDiv.innerHTML = 'Die ISBN-Nummer ist falsch.'
        outDiv.style.color = 'red'
    }
})

inputIsbn.addEventListener('focus', () => {
    
    outDiv.innerHTML = ''
})
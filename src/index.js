const { checkISBN } = require("./script.js");

const trigger = document.getElementById("btnStart");

trigger.addEventListener('click', () => {
    checkISBN();
})
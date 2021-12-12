function test (bool) {
    return bool;
}

function checkISBN (isbnString, checkSum) {

    const isbnDigits = isbnString.split('').map((digit) => parseInt(digit, 10))

    if (checkSum === isbnDigits[9]) {
        return true;
    }

    return false;
}

module.exports = {
    test,
    checkISBN
}
function calculateISBNChecksum (isbnString) {

    const isbnDigits = isbnString.split('').map((digit) => parseInt(digit, 10));
    let checksum = 0;

    for(let i = 0; i < isbnDigits.length-1; i++){
        checksum += isbnDigits[i] * (i+1);
    }

    checksum %= 11;

    if (checksum === 10) {
        return 'X';
    }

    return ''+checksum+'';
}

function checkISBN (isbnString) {

    let checksum = isbnString[9];

    if (checksum === calculateISBNChecksum(isbnString)) {
        return true;
    }

    return false;
}

module.exports = {
    calculateISBNChecksum,
    checkISBN
}
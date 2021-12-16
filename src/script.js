function calculateISBNChecksum (isbnDigits) {

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

    const allowedChars = ['0','1','2','3','4','5','6','7','8','9','x','X'];
    let isbnDigits = []

    if (isbnString.length === 10) {
        isbnString.split('').forEach(digit => {
            if (allowedChars.indexOf(digit) === -1) {
                return false;
            }
            isbnDigits.push(parseInt(digit, 10))
        });
        let checksum = isbnString[9];

        if (checksum == 'x') {
            checksum = 'X'
        }
        if (checksum === calculateISBNChecksum(isbnDigits)) {
            return true;
        }
    }
    return false;
}

module.exports = {
    calculateISBNChecksum,
    checkISBN
}
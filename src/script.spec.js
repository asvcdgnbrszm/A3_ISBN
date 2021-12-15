const { calculateISBNChecksum } = require('./script.js')

describe('calculateISBNChecksum', () => {
    it('should return 1', () => {
        expect(calculateISBNChecksum('1000000001')).toBe('1');
    })
    it('should return X', () => {
        expect(calculateISBNChecksum('000700009X')).toBe('X');
    })
});
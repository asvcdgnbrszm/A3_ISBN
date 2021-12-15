const { calculateISBNChecksum } = require('./script.js')

describe('calculateISBNChecksum', () => {
    it('should return 1', () => {
        expect(calculateISBNChecksum('1000000001')).toBe('1');
    })
});
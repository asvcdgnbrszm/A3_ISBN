const { calculateISBNChecksum } = require('./script.js')
const { checkISBN } = require('./script.js')

describe('calculateISBNChecksum', () => {
    it('should return 1', () => {
        expect(calculateISBNChecksum('1000000001')).toBe('1');
    })
    it('should return X', () => {
        expect(calculateISBNChecksum('000700009X')).toBe('X');
    })
});
describe('checkISBN', () => {
    it('should return true', () => {
        expect(checkISBN('1000000001')).toBe(true);
    })
    it('should return true', () => {
        expect(checkISBN('000700009X')).toBe(true);
    })
    it('should return true', () => {
        expect(checkISBN('000700009x')).toBe(true);
    })
    it('should return true', () => {
        expect(checkISBN('0100000002')).toBe(true);
    })
    it('should return true', () => {
        expect(checkISBN('0004000005')).toBe(true);
    })
    it('should return false', () => {
        expect(checkISBN('0100000003')).toBe(false);
    })
});
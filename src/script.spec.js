const { test } = require('./script.js')

describe('test', () => {
    it('should work', () => {
        expect(test(true)).toBe(true);
    })
});
const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplys 2 and 2', () => {
        result = multiply(2, 2);
        expect(result).toBe(4);
    });

    it('multiplys 0 and 5', () => {
        result = multiply(0, 5);
        expect(result).toBe(0);
    });

    it('multiplys 10 and 50', () => {
        result = multiply(10, 50);
        expect(result).toBe(500);
    });

});
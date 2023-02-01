const add = require('./add');

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(2 + 2).toBe(4);
    });

    it('adds 0 and 5', () => {
        expect(0 + 5).toBe(5);
    });

    it('adds 10 and 50', () => {
        result = add(10, 50);
        expect(result).toBe(60);
    });

  });

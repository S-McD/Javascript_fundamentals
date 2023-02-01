const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('returns Fizz if number % 3 === 0', () => {
    result = fizzBuzz(3); 
    expect(result).toBe('Fizz');
    result = fizzBuzz(18);
    expect(result).toBe('Fizz');
    });

    it('returns Buzz if number % 5 === 0', () => {
        result = fizzBuzz(5);
        expect(result).toBe('Buzz');
        result = fizzBuzz(20);
        expect(result).toBe('Buzz');
    });

    it('returns number if number not divisible by 3, 5 or 15', () => {
        result = fizzBuzz(8);
        expect(result).toBe(8);
    });

    it('returns FizzBuzz if number % 5 === 0 && number % 3 === 0', () => {
        result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
});
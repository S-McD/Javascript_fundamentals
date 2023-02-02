const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('returns the correct matches for given string and max price', () => {
    result = searchCandies('Ma', 10);
    expect(result).toEqual([ 'Mars', 'Maltesers' ]);
    result = searchCandies('Ma', 2);
    expect(result).toEqual([ 'Mars' ]);
    });

    it('returns the correct matches for given first letter and max price', () => {
        result = searchCandies('S', 10);
        expect(result).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
        result = searchCandies('S', 4);
        expect(result).toEqual([ 'Skitties', 'Skittles' ]);
    });
    it('returns the correct matches regardless of case', () => {
        result = searchCandies('ma', 10);
        expect(result).toEqual([ 'Mars', 'Maltesers' ]);
    });
});
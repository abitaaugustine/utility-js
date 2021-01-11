const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3,4] is [2,3,4]', () => {
        expect(tail([1,2,3,4], 4)).toEqual([2,3,4]);
    });

    it('Tail of [] is []', () => {
        expect(tail([], 0)).toEqual([]);
    });


})
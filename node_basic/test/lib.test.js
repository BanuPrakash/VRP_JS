const {add, filter, map} = require('../src/lib'); // import

// Assemble TEST Suite
describe("Testing lib", () => {
    // test spec
    it("testing add", () => {
        let expected = 9;
        let actualResult = add(4, 5);
        expect(actualResult).toBe(expected);
    });

    // test spec
    it("testing filter", () => {
        let callback = jest.fn(x => x % 2 === 0);
        let nos = [6, 1, 2, 3, 9, 4];
        let actualResult = filter(nos, callback);
        expect(callback).toBeCalledTimes(6);
        console.log(callback.mock.calls);
        expect(callback.mock.calls[0][0]).toBe(6);
        expect(callback.mock.calls[1][0]).toBe(1);
        expect(callback.mock.calls[2][0]).toBe(2);
        expect(actualResult[0]).toBe(6);
        expect(actualResult[1]).toBe(2);     
    });

});
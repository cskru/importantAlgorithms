const quickSort = require('../../../src/algorithms/sorting/quickSort').quickSort;
const expect = require('chai').expect;

describe('Merge Sort Functional Tests', async() => {
    it('Test with integers', async() => {
        const input = [3, 2, 5, 6, 1];
        const result = quickSort(input);
        expect(result).to.be.deep.equals([]);
    });

    it('Test with strings', async() => {
        const input = ["abcd", "efgh", "xyz", "pqr", "ghi"]; //Use random string generators if required
        const result = quickSort(input);
        expect(result).to.be.deep.equals([]);
    });

    it('Test with a mixture of types. It must throw error', async() => {
        const input = ["abcd", "efgh", "xyz", "pqr", "ghi"]; //Use random string generators if required
        const result = quickSort(input);
        expect(result).to.be.deep.equals([]);
    });

    //So on.. add more cases to validate correctness
})
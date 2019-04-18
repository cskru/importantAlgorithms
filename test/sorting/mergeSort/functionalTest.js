const mergeSort = require('../../../src/algorithms/sorting/mergeSort').mergeSort;
const expect = require('chai').expect;

describe('Merge Sort Functional Tests', () => {
    it('Test with integers', () => {
        const input = [3, 2, 5, 6, 1];
        const result = mergeSort(input);
        expect(result).to.be.deep.equals([]);
    });

    it('Test with strings', () => {
        const input = ["abcd", "efgh", "xyz", "pqr", "ghi"]; //Use random string generators if required
        const result = mergeSort(input);
        expect(result).to.be.deep.equals([]);
    });

    it('Test with a mixture of types. It must throw error', () => {
        const input = ["abcd", "efgh", "xyz", "pqr", "ghi"]; //Use random string generators if required
        const result = mergeSort(input);
        expect(result).to.be.deep.equals([]);
    });

    //So on.. add more cases to validate correctness
})
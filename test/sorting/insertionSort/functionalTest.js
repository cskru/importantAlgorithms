const insertionSort = require('../../../src/algorithms/sorting/insertionSort').insertionSort;
const expect = require('chai').expect;

describe('Insertion sort with functional tests', function(){
    it('Test 1: Integers', function(){
        const input = [1,28,36,19,66,8];
        const result = insertionSort(input);
        expect(result).to.be.deep.equals([1,8,19,28,36,66]);
    });
});
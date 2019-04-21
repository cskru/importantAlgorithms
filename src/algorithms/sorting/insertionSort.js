/*
Algorithm of insertion sort
def insertionSort(A):
    print(len(A))
    for j in range(1,len(A)):
        print(j)

        key = A[j]
        i=j-1

        while i>=0 and A[i]>key:
            A[i+1] = A[i]
            i=i-1

        A[i+1] = key

    print(A)

insertionSort([1,28,36,19,66,8]) */
const insertionSort = function (inputArr) {
    var i, j, key;
    for (j = 1; j < inputArr.length; j++) {
        key = inputArr[j];
        i = j - 1;

        while (i >= 0 && inputArr[i] > key) {
            inputArr[i + 1] = inputArr[i];
            i = i - 1;
        }
        inputArr[i + 1] = key;
    }
    return inputArr;
}

module.exports = {
    insertionSort
}
/*
Algorithm (CLRS)
HEAPSORT(A)
    BUILD-MAX-HEAP(A)
    for i = A.length downto 2
        exchange A[1] with A[i]
        A.heap-size = A.heap-size - 1
        MAX-HEAPIFY(A, 1)
Explanation reference: https://www.youtube.com/watch?v=HqPJF2L5h9U
*/
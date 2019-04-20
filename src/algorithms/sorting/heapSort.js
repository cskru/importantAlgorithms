/*
Algorithm (CLRS)
HEAPSORT(A)
    BUILD-MAX-HEAP(A)
    for i = A.length downto 2
        exchange A[1] with A[i]
        A.heap-size = A.heap-size - 1
        MAX-HEAPIFY(A, 1) //1 - index of root element in the input array

MAX-HEAPIFY(A, i) 
    l = LEFT(i) 
    r = RIGHT(i) 
    if l <= A.heap-size and A[l] > A[i]
        largest = l
    else 
        largest = i
    if r <= A.heap-size and A[r] > A[largest]
        largest = r
    if largest != i
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest) 

PARENT(i)
    return floor(i/2)
LEFT(i)
    return 2i
RIGHT(i)
    return 2i + 1

BUILD-MAX-HEAP(A)
    A.heap-size = A.length
    for i = floor(A.length/2) downto 1
        MAX-HEAPIFY(A, i)

Explanation reference: https://www.youtube.com/watch?v=HqPJF2L5h9U
*/
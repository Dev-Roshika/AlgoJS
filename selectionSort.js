let A = [64, 2, 12, 22, 11];

function selectionSort(A) {
  for (let i = 0; i < A.length; i++) {
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[min]) {
        min = j;
      }
    }
    let temp = A[i];
    A[i] = A[min];
    A[min] = temp;
  }
  return A;
}

console.log(selectionSort(A));

// Divides the array down the middle, recursively until last recursted method instance has array of length 1. And then starts merging back all those recursed instances from length of element 1, to the first 2 halves of the array, and merge them, checking left and right half and items in them, and pushing to resulting array items in order from lowest to highest, until recursion is back to the initial array.
// Complexity: O(n ^ 2)
export function mergeSortResolve<T = number>(array1: Array<T>, array2: Array<T>, ascending = true): Array<T> {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (ascending ? array1[i] < array2[j] : array1[i] > array2[j]) {
      result.push(array1[i]);

      i++;
    }
    else {
      result.push(array2[j]);

      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);

    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);

    j++;
  }

  return result;
}

export default function mergeSort<T = number>(array: Array<T>, ascending = true): Array<T> {
  if (array.length <= 1) return array;

  const length = array.length;

  const mid = Math.floor(length / 2);

  const left = mergeSort(array.slice(0, mid), ascending);
  const right = mergeSort(array.slice(mid), ascending);

  return mergeSortResolve(left, right, ascending);
}

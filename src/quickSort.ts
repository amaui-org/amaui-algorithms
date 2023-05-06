
// Find a pivot item in the array, and go through all values from left to right, and all values less than the pivot value add them to left array, and all values bigger than pivot value, add them to the right array.Recursively now use the quick sort method on left and right arrays, and merge them back together with pivot value being in the middle.
// Complexity: O(n * log n)
export default function quickSort<T = number>(array: Array<T>, ascending = true): Array<T> {
  const length = array.length;

  if (length <= 1) return array;

  // Use the last value as the pivot value
  const pivot = array[length - 1];

  let i = 0;
  const left = [];
  const right = [];

  // Do not include the pivot value
  while (i < length - 1) {
    if (ascending ? array[i] < pivot : array[i] > pivot) left.push(array[i]);
    else right.push(array[i]);

    i++;
  }

  return [...quickSort(left, ascending), pivot, ...quickSort(right, ascending)];
}

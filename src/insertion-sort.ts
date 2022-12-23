
// Array is all the time split between sorted and unsorted part of the array.In every loop first element of unsorted part is compared to sorted part of the array from end to start(of sorted part), and every item from back to start in sorted part of the array that’s larger than first item in unsorted part of the array is swapped with item + 1 next to it.

// At the end, the last item from back to start in the sorted part that wasn’t bigger than the first item in sorted, is replaced with that first item in sorted part.
// Complexity: O(n ^ 2)
export default function insertionSort<T = number>(value: Array<T>, ascending = true): Array<T> {
  const length = value.length;

  for (let i = 1; i < length; i++) {
    const item = value[i];

    let j = i - 1;

    while (j >= 0 && (ascending ? value[j] > item : value[j] < item)) {
      value[j + 1] = value[j];

      j--;
    }

    value[j + 1] = item;
  }

  return value;
}


// While loop runs, and in each loop, the entire array is looped and for every i,
// where i + 1 is smaller, swap between i and i + 1, is made.

// When no swaps are made in the entire array loop, they are all sorted.
// Complexity: O(n ^ 2)
export default function bubbleSort<T = number>(value: Array<T>, ascending = true): Array<T> {
  const length = value.length;

  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < length; i++) {
      if (ascending ? value[i] > value[i + 1] : value[i] < value[i + 1]) {
        const item = value[i];

        value[i] = value[i + 1];
        value[i + 1] = item;

        swapped = true;
      }
    }
  }

  return value;
}


// For every i, an entire i + 1 slice of array is looped to find the min value(smaller than i) within it,
// and if that value is not the same as i, i and min are swapped.
// Complexity: O(n ^ 2)
export default function selectionSort<T = number>(value: Array<T>): Array<T> {
  const length = value.length;

  for (let i = 0; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      if (value[j] < value[min]) min = j;
    }

    if (min !== i) {
      const item = value[i];

      value[i] = value[min];
      value[min] = item;
    }
  }

  return value;
}

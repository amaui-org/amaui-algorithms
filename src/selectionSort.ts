
// For every i, an entire i + 1 slice of array is looped to find the min value(smaller than i) within it,
// and if that value is not the same as i, i and min are swapped.
// Complexity: O(n ^ 2)
export default function selectionSort<T = number>(value: Array<T>, ascending = true): Array<T> {
  const length = value.length;

  for (let i = 0; i < length; i++) {
    let minOrMax = i;

    for (let j = i + 1; j < length; j++) {
      if (ascending ? value[j] < value[minOrMax] : value[j] > value[minOrMax]) minOrMax = j;
    }

    if (minOrMax !== i) {
      const item = value[i];

      value[i] = value[minOrMax];
      value[minOrMax] = item;
    }
  }

  return value;
}

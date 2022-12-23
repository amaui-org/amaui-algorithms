
// Including the sign (+,-)
export function maxDigits<T = number>(array: Array<T>): number {
  return Math.max(...array.map(item => String(item).length));
}

export function getDigit(value: number, indexValue: number): number {
  let response = String(value);

  const index = response.length - 1 - indexValue;

  response = index >= 0 ? response[index] : undefined;

  return ['+', '-'].includes(response) ? -1 : !response ? 0 : +response;
}

// Makes 10 buckets, and loops for the amount of times of number of digits in the largest number in the array.And in each iteration for every digit, loops through the entire array, and sorts from right digit to the left(smallest base number to largest), all the values in buckets, and flattens the array.At the end they will all be sorted in the last flattened array.
// Complexity: O(n)
export default function radixSort<T = number>(value: Array<T>): Array<T> {
  let array = value;

  const digits = maxDigits(array);

  // Digits
  for (let i = 0; i < digits; i++) {
    // Sign, and 10 number digits 0-9, 11
    const buckets = Array.from({ length: 11 }, () => []);

    // Array
    for (let j = 0; j < array.length; j++) {
      // -1 for sign, 0 for 0 or no value, and 0-9 for a value
      const index = getDigit(array[j] as number, i);

      buckets[index + 1].push(array[j]);
    }

    array = buckets.flatMap(item => item);
  }

  return array;
}

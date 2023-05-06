
// Move through each letter of the main string, and then move also through all letters of the value, and if all the i + j letters match the j letters of the value in a row, then true, otherwise it doesn’t.
// Complexity: O(n ^ 2)
export default function naiveSearch(string: string, value: string): boolean {
  if (value.length > string.length) return false;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (string[i + j] !== value[j]) break;

      if (j === value.length - 1) return true;
    }
  }

  return false;
}

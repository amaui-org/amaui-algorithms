import longestPrefixSuffix from './longestPrefixSuffix';

// It goes through the string and matches the value sequence, where value match stops in sequence, based on LPS table of the value,
// it doesn’t go back like naive search to i = 1, but it continues from the same i and continues matching from the j at index where prefix repeated position within the value.
// Complexity: O(n)
export default function kmp(string: string, value: string): boolean {
  const lengthString = string.length;
  const lengthValue = value.length;

  const lps = longestPrefixSuffix(value);

  let i = 0;
  let j = 0;

  while (i < lengthString) {
    if (string[i] === value[j]) {
      i++;
      j++;
    }
    else {
      if (j > 0) j = lps[j - 1];
      else i++;
    }

    if (j === lengthValue) return true;
  }

  return false;
}

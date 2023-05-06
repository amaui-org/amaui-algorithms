
// Records at the indexes where the longest prefix exists within the same value, where it ends.
// Complexity: O(n)
export default function longestPrefixSuffix(value: string): Array<number> {
  let i = 0;
  let j = 1;

  const length = value.length;

  const lps = new Array(length).fill(0);

  while (j < length) {
    if (value[i] === value[j]) {
      lps[j] = i + 1;

      i++;
      j++;
    }
    else {
      if (i !== 0) i = 0;
      else j++;
    }
  }

  return lps;
}

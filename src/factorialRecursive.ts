
export interface IFactorialRecursiveOptions {
  cache?: boolean;
}

const cache = {};

export default function factorialRecursive(
  value: number,
  options: IFactorialRecursiveOptions = { cache: true }
): number {
  // Cache
  if (options?.cache && cache[value] !== undefined) return cache[value];

  if (value < 3) {
    if (options?.cache && cache[value] === undefined) cache[value] = value;

    return value;
  }

  const result = value * factorialRecursive(value - 1, options);

  if (options?.cache && cache[value] === undefined) cache[value] = result;

  return result;
}

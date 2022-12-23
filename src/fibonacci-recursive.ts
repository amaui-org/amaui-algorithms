
export interface IFibonacciRecursiveOptions {
  cache?: boolean;
}

const cache = {};

export default function fibonacciRecursive(
  value: number,
  options: IFibonacciRecursiveOptions = { cache: true }
): number {
  // Cache
  if (options?.cache && cache[value] !== undefined) return cache[value];

  if (value < 2) {
    if (options?.cache && cache[value] === undefined) cache[value] = value;

    return value;
  }

  const result = fibonacciRecursive(value - 1, options) + fibonacciRecursive(value - 2, options);

  if (options?.cache && cache[value] === undefined) cache[value] = result;

  return result;
}

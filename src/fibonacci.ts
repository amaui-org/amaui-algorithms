
export interface IFibonacciOptions {
  cache?: boolean;
}

const cache = {};

export default function fibonacci(
  value: number,
  options: IFibonacciOptions = { cache: true }
): number {
  // Cache
  if (options?.cache && cache[value] !== undefined) return cache[value];

  if (value < 2) return value;

  const values = [0, 1];

  for (let i = 2; i <= value; i++) values[i] = values[i - 1] + values[i - 2];

  const result = values[values.length - 1];

  if (options?.cache && cache[value] === undefined) cache[value] = result;

  return result;
}

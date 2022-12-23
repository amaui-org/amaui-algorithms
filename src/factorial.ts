
export interface IFactorialOptions {
  cache?: boolean;
}

const cache = {};

export default function factorial(
  value: number,
  options: IFactorialOptions = { cache: true }
): number {
  // Cache
  if (options?.cache && cache[value] !== undefined) return cache[value];

  if (value < 3) return value;

  const values = [0, 1, 2];

  for (let i = 3; i <= value; i++) values[i] = i * values[i - 1];

  const result = values[values.length - 1];

  if (options?.cache && cache[value] === undefined) cache[value] = result;

  return result;
}

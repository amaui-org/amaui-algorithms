import { is } from '@amaui/utils';
import { TMethod } from '@amaui/models';

export interface IBinarySearchRecursiveOptions {
  sort?: boolean;
  sortMethod?: TMethod;
}

export default function binarySearchRecursive(
  array: Array<number>,
  value: number,
  startValue?: number,
  endValue?: number,
  options: IBinarySearchRecursiveOptions = {}
) {
  let start = startValue;
  let end = endValue;

  if (startValue === undefined && endValue === undefined) {
    start = 0;
    end = array.length - 1;

    if (options?.sort) array.sort(is('function', options?.sortMethod) ? options.sortMethod : (a, b) => a - b);
  }

  if (end <= start && array[start] !== value) return -1;

  const middle = start + Math.floor((end - start) / 2);

  if (array[middle] === value) return middle;

  return value < array[middle] ? binarySearchRecursive(array, value, start, middle - 1, options) : binarySearchRecursive(array, value, middle + 1, end, options);
}

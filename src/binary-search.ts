import { is } from '@amaui/utils';
import { TMethod } from '@amaui/models';

export interface IBinarySearchOptions {
  sort?: boolean;
  sortMethod?: TMethod;
}

export default function binarySearch(
  array: Array<number>,
  value: number,
  options: IBinarySearchOptions = {}
) {
  if (options?.sort) array.sort(is('function', options?.sortMethod) ? options.sortMethod : (a, b) => a - b);

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);

    if (array[middle] === value) return middle;

    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
  }

  return -1;

}

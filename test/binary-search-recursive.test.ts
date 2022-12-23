/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/binary-search-recursive', () => {

  to('binarySearchRecursive', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.AmauiAlgorithms.binarySearchRecursive([1, 2, 3, 4], 4), window.AmauiAlgorithms.binarySearchRecursive([1, 2, 3, 4], 14)];
    });
    const valueNode = [AmauiAlgorithms.binarySearchRecursive([1, 2, 3, 4], 4), AmauiAlgorithms.binarySearchRecursive([1, 2, 3, 4], 14)];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([3, -1]));
  });

});

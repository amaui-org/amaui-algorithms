/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/binary-search', () => {

  to('binarySearch', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.AmauiAlgorithms.binarySearch([1, 2, 3, 4], 4), window.AmauiAlgorithms.binarySearch([1, 2, 3, 4], 14)];
    });
    const valueNode = [AmauiAlgorithms.binarySearch([1, 2, 3, 4], 4), AmauiAlgorithms.binarySearch([1, 2, 3, 4], 14)];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([3, -1]));
  });

});

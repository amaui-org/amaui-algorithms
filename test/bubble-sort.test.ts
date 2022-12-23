/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/bubble-sort', () => {

  to('bubbleSort', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return window.AmauiAlgorithms.bubbleSort([1, -14, 4, 114, -414, 14]);
    });
    const valueNode = AmauiAlgorithms.bubbleSort([1, -14, 4, 114, -414, 14]);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([-414, -14, 1, 4, 14, 114]));
  });

});

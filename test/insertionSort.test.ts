/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/insertionSort', () => {

  to('insertionSort', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return window.AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14]);
    });
    const valueNode = AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14]);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([-414, -14, 1, 4, 14, 114]));
  });

  group('ascending', () => {

    to('ascending', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        return window.AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14], true);
      });
      const valueNode = AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14], true);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([-414, -14, 1, 4, 14, 114]));
    });

    to('descending', async () => {
      const valueBrowsers = await evaluate((window: any) => {
        return window.AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14], false);
      });
      const valueNode = AmauiAlgorithms.insertionSort([1, -14, 4, 114, -414, 14], false);
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([114, 14, 4, 1, -14, -414]));
    });

  });

});

/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/fibonacciRecursive', () => {

  to('fibonacciRecursive', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [0, 1, 2, 3, 14].map(item => window.AmauiAlgorithms.fibonacciRecursive(item));
    });
    const valueNode = [0, 1, 2, 3, 14].map(item => AmauiAlgorithms.fibonacciRecursive(item));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([0, 1, 1, 2, 377]));
  });

});

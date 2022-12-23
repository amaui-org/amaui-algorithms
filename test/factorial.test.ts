/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/factorial', () => {

  to('factorial', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [0, 1, 2, 3, 14].map(item => window.AmauiAlgorithms.factorial(item));
    });
    const valueNode = [0, 1, 2, 3, 14].map(item => AmauiAlgorithms.factorial(item));
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([0, 1, 2, 6, 87178291200]));
  });

});

/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/naive-search', () => {

  to('naiveSearch', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.AmauiAlgorithms.naiveSearch('Lorem ipsum lorem', 'lorem'), window.AmauiAlgorithms.naiveSearch('Lorem ipsum lorem', 'loremipsu')];
    });
    const valueNode = [AmauiAlgorithms.naiveSearch('Lorem ipsum lorem', 'lorem'), AmauiAlgorithms.naiveSearch('Lorem ipsum lorem', 'loremipsu')];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([true, false]));
  });

});

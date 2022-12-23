/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/kmp', () => {

  to('kmp', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.AmauiAlgorithms.kmp('Lorem ipsum lorem', 'lorem'), window.AmauiAlgorithms.kmp('Lorem ipsum lorem', 'loremipsu')];
    });
    const valueNode = [AmauiAlgorithms.kmp('Lorem ipsum lorem', 'lorem'), AmauiAlgorithms.kmp('Lorem ipsum lorem', 'loremipsu')];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([true, false]));
  });

});

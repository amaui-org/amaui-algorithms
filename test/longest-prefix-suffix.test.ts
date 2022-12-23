/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import * as AmauiAlgorithms from '../src';

group('@amaui/algorithms/longest-prefix-suffix', () => {

  to('longestPrefixSuffix', async () => {
    const valueBrowsers = await evaluate((window: any) => {
      return [window.AmauiAlgorithms.longestPrefixSuffix('asdasuasday')];
    });
    const valueNode = [AmauiAlgorithms.longestPrefixSuffix('asdasuasday')];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      [0, 0, 0, 1, 2, 0, 1, 2, 3, 4, 0]
    ]));
  });

});

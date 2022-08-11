'use strict';

const metatests = require('metatests');
const { Sheet } = require('..');

metatests.test('Read deep non-table identifiers', async (test) => {
  const sheet = new Sheet();

  sheet.cells['item.price.usd'] = 100;
  sheet.cells['item.price.uah'] = 200;

  test.strictSame(sheet.values['item.price'], { usd: 100, uah: 200 }); // -> should fail, but it isn't
  test.strictSame(1, 0); // -> obviously should fail, but it isn't

  test.end();
});

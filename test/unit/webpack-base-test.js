
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');
  it ('entry', () => {
    assert.equal(baseConfig.entry.search.indexOf('search/index.js') > -1, true)
  })
});

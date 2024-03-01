const { defaults } = require('jest-config');
module.exports = {
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
};

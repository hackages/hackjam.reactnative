module.exports = function (w) {

  return {
    files: ['src/**/*.ts', 'package.json'],

    tests: ['__tests__/**/*.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {

      'src/**/*.ts': w.compilers.typeScript({ module: 'amd' })
    }
  };
};
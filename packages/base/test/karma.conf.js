module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['mocha'],
    reporters: ['mocha'],
    mochaReporter: {
      showDiff: true,
    },
    files: ['test/build/bundle.js'],
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO,
    browserNoActivityTimeout: 30000,
  });
};

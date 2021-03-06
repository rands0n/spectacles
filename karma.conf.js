const join = require('path').join

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      'tests/mangoo.js'
    ],

    preprocessors: {
      'tests/mangoo.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          { test: /.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      }
    },

    reporters: ['mocha', 'notify', 'coverage', 'progress'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-notify-reporter',
      'karma-webpack'
    ],

    mochaReporter: { output: 'minimal' },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  })
}

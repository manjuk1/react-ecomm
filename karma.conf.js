// Karma configuration
// Generated on Thu Dec 14 2017 03:47:05 GMT+0530 (IST)

module.exports = function(config) {
  config.set({
    basePath: './src',
    browsers: ['PhantomJS'],
    coverageIstanbulReporter: {
      fixWebpackSourcePaths: true,
    },
    coverageReporter: {
      reporters: [
        // these reporters can only be used with `v0.2.0` of istanbul-instrumenter-loader
        { type: 'html' },
        { type: 'lcov' },
      ],
      dir: '../coverage',
    },
    singleRun: false,
    frameworks: ['jasmine'],
    files: [
    '../node_modules/babel-polyfill/dist/polyfill.js',
    './test-index.js',
    ],
    preprocessors: {
        './test-index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage-istanbul'],
    webpack: {
              devtool: 'inline-source-map',
              resolve: {
                extensions: [ ' ' ,'.js', '.jsx'],
              },
              module: {
                rules: [
                  {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                  },
                  {
                    test: /\.(js|jsx)$/,
                    use: {
                      loader: 'istanbul-instrumenter-loader',
                    },
                    enforce: 'post',
                    exclude: [/node_modules/, /.test/],
                  },
                ],
              },
            },
    webpackMiddleware: {
          noInfo: true,
    },

  })
}



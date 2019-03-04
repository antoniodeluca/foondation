const commonConfig = {
    autoWatch: true,
    basePath: '',
    browserify: {
        debug: true,
        transform: ['babelify']
    },
    browsers: [
        'Firefox',
        'Chrome'
    ],
    colors: true,
    concurrency: Infinity,
    exclude: [],
    frameworks: [
        'browserify',
        'mocha'
    ],
    port: 9876,
    preprocessors: {
        'tests/**/*.js': ['browserify']
    },
    reporters: ['mocha'],
    singleRun: true
};

module.exports = commonConfig;

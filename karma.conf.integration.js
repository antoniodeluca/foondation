const commonConfig = require('./karma.common.conf');

module.exports = function(config) {
    config.set(Object.assign(
        commonConfig,
        {
            files: ['tests/integration/**/*.js'],
            logLevel: config.LOG_INFO
        }
    ));
};

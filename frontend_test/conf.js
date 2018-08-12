exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['incognito']
        }
    },

    specs: ['spec.js'],
};

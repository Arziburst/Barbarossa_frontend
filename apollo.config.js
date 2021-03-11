module.exports = {
    client: {
        url:      'http://localhost:4000/graphql',
        includes: [ './src/bus/**/*.graphql' ],
        excludes: [ '**/__tests__/**' ],
    },
};

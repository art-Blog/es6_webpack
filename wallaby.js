module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'src/**/*.js' }
        ],
        tests: [
            { pattern: 'test/**/*.js' }
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        env: {
            type: 'node'
        }
    }
}
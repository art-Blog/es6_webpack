const path = require('path');

module.exports = {
    cache: true,
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index:'./src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};
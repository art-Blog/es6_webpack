const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    cache: true,
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '前端自動化練習',
            template: './src/app.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    }
};
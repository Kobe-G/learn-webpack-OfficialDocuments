const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    mode: "development",
    devtool:'inline-source-map',//source map
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ]

};
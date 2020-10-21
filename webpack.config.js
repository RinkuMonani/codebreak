const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const { Template } = require("webpack")

module.exports = {
    entry: [
        './src/js/index.js'
    ],

    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    devServer:{
        contentBase: './dist'
    }

}
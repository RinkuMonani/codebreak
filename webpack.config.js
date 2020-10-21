const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const { Template } = require("webpack")

module.exports = {
    entry: {
        index:'./src/js/index.js',
        arena:'./src/js/arena.js'  
    },

    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash:true,
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            hash:true,
            filename: 'arena.html',
            template: './src/arena.html',
            chunks: ['arena']
        }),
    ],

    devServer:{
        contentBase: './dist'
    },
    devtool: 'source-map'

}
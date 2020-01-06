const path = require('path')
const webpack = require("webpack")
const HtmlWEbPackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node-module/,
                loader: "baabel-loader"
            }
        ]
    },
    plugins: [

        new HtmlWEbPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })

    ]
}
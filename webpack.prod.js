const path = require('path')
<<<<<<< HEAD
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
=======
const webpack = require("webpack")
const HtmlWEbPackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
>>>>>>> develop
    module: {
        rules: [
            {
                test: '/\.js$/',
<<<<<<< HEAD
                exclude: /node_modules/,
                loader: "babel-loader"
=======
                exclude: /node-module/,
                loader: "baabel-loader"
>>>>>>> develop
            }
        ]
    },
    plugins: [
<<<<<<< HEAD
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
=======

        new HtmlWEbPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })

    ]
}
>>>>>>> develop

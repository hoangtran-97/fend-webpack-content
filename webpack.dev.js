const path = require('path')
const webpack = require("webpack")
const HtmlWEbPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
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
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })

    ]
}

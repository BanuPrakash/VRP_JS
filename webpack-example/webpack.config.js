const webpack = require('webpack');  // installed
const path = require('path'); // built-in
const HtmlWebpackPlugin = require('html-webpack-plugin');

// return webpack config object
module.exports = {
    "devtool": 'cheap-module-source-map',
    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.[contenthash:8].js"
    },
  
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                use: "babel-loader"
            },
            {
                test: /\.ts(x)?$/,
                use: "ts-loader"
            },
            {
                test :/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname) + "/public/index.html"
        }
    )],
    devServer: {
        port: 1234
    }
}

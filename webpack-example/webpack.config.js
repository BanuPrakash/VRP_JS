const webpack = require('webpack');  // installed
const path = require('path'); // built-in


// return webpack config object
module.exports = {

    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
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
            }
        ]
    }
}

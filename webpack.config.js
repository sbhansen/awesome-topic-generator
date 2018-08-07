const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    resolve: {
        extensions: ['.tsx', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
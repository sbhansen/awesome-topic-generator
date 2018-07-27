const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    resolve: {
        extensions: ['.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
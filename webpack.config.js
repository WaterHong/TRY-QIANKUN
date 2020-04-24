const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ["./Router.js"],
    output: {
        publicPath: "/",
        path: path.resolve(process.cwd(), "./dist/"),
        filename: "[name].[hash].js"
    },
    devServer: {
        publicPath: "/",
        port: 8888,
        hot: true,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: { babelrcRoots: [".", "../"] }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                  allowTsInNodeModules: true
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html"
        })
    ]
};
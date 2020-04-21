const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const packageName = require('./package.json').name;

module.exports = {
    entry: ["./index.tsx"],
    output: {
        publicPath: "/",
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,   
    },
    devServer: {
        publicPath: "/",
        port: 8881,
        hot: true,
        disableHostCheck: true,
        headers:{
            'Access-Control-Allow-Origin': '*' //重要！！
        }
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
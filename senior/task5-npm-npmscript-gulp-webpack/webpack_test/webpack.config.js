var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var ImageminPlugin = require('imagemin-webpack-plugin').default;
// var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "_[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("_index.css"),
        new UglifyJSPlugin()
    ]
}
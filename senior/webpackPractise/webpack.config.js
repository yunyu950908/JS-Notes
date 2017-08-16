const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default
var base = {
    index: "./src/index.js"
}

module.exports = {
    entry: base,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "_[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use:[
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("_index.css")
        //new UglifyJSPlugin()
    ]

};
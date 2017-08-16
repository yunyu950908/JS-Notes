var path = require("path")
//ExtractTextPlugin = require("extract-text-webpack-plugin"),
//UglifyJSPlugin = require("UglifyJSPlugin")


module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "_[name].js"
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: ["node_modules"],
    //             use: UglifyJSPlugin
    //         }
    //         // {
    //         //     test: /\.css$/,
    //         //     use: ExtractTextPlugin.extract({
    //         //         fallback: "style-loader",
    //         //         use: "css-loader"
    //         //     })
    //         // }
    //     ]
    // },
    // plugins: [
    //     new ExtractTextPlugin("styles.css"),
    //     new UglifyJSPlugin("index.min.js")
    // ]
}
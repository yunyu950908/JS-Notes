const path = require("path");

var base = {
    index: "./src/index.js"
}

module.exports = {
    entry: base,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "_[name].js"
    }
};
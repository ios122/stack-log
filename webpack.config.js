'use strict';
var webpack = require('webpack')

let plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    })
  ]

module.exports = {
    entry: "./src/index.js",
    target: 'web',
    output: {
        library:"log",
        path: `./lib`,
        filename: "stack-log.js",
        libraryTarget:"this"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ]
    },
    plugins: plugins,
}

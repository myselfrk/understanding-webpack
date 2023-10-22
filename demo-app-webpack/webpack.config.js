const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./scripts/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    environment: {
      arrowFunction: false, // https://github.com/babel/babel-loader#top-level-function-iife-is-still-arrow-on-webpack-5
    },
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: ["@babel/preset-env"],
    //       },
    //     },
    //   },
    // ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject:"body"
    }),
  ],
};

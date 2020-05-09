const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../main.js"),
  },
  devServer: {
    port: 8000,
    hot: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      filename: "index.html",
    }),
  ],
});

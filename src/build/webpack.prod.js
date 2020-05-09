const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "../component/src/index.js"),
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
});

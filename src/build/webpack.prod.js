const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = merge(common, {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "../component/index.js"),
  },
  plugins: [new VueLoaderPlugin()],
});

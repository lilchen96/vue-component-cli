const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    port: 8000,
    hot: true,
  },
  entry: {
    index: path.resolve(__dirname, "src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 打包后的文件存放在dist文件夹
    filename: "bundle.js", // 打包后输出文件的文件设置为btn.js
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["url-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "src"), // 这样配置后 @ 可以指向 src 目录
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ],
};

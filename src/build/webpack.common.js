const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../component/dist"), // 打包后的文件存放到需要上传到NPM的文件夹里
    filename: "bundle.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
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
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "src"), // 这样配置后 @ 可以指向 src 目录
    },
  },
};

## vue-component-cli

vue 单组件脚手架

#### 命令

1.yarn install 安装依赖包

2.yarn run dev 启动测试服务（默认端口：8000）

3.yarn run build 打包

#### 使用说明

1.组件写在 src/component/src/index.vue 中。

2.打包后的文件（bundle.js）在 src/component/dist 中。

3.在 src/component/package.json 中配置打包信息。

4.在 src/component 下 npm login 和 npm publish。包入口文件 dist/bundle.js，推荐同时暴露组件源代码。

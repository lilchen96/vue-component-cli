import hello from "./hello.vue";

const component = {
  // 安装
  install: (Vue) => {
    Vue.component(hello.name, hello);
  },
};
export default component;

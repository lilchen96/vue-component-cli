import test from "./test.vue";

const component = {
  // 安装
  install: (Vue) => {
    Vue.component(test.name, test);
  },
};
export default component;

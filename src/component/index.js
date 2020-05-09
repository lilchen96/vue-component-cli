import test from "./test.vue";

const component = {
  install: (Vue) => {
    Vue.component(test.name, test);
  },
};
export default component;

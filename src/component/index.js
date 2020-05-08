import hello from "@/component/hello.vue";

const component = {
  install: (Vue) => {
    Vue.component(hello.name, hello);
  },
};
export default component;

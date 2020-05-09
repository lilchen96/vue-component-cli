import Vue from "vue";
import App from "./App.vue";
import component from "./component/bundle";

Vue.use(component);

new Vue({
  el: "#app",
  render: (h) => h(App),
});

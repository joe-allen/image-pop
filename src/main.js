import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import App from "./components/HelloWorld.vue";

const ImgPop = wrap(Vue, App);

window.customElements.define("img-pop", ImgPop);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

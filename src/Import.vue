// need to have this to render custom element
<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import App from "./components/HelloWorld.vue";

const ImgPop = wrap(Vue, App);

window.customElements.define("img-pop", ImgPop);

Vue.config.productionTip = false;
</script>
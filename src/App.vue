<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" src="https://avatars2.githubusercontent.com/u/46725?s=460&v=4"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: green;
  margin-top: 60px;
}
</style>

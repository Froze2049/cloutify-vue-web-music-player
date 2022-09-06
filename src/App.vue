<template>
  <index-menu />
</template>

<script>
import IndexMenu from "./components/IndexMenu.vue";

export default {
  name: "App",
  components: {
    IndexMenu,
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

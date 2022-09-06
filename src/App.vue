<template>
  <root-container></root-container>
</template>

<script>
import RootContainer from "./pages/RootContainer.vue";

export default {
  name: "App",
  components: {
    RootContainer,
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

<template>
  <div class="root-container">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <playing-bar></playing-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "../components/NavBar/TopNav.vue";
import LeftNav from "../components/NavBar/LeftNav.vue";
import PlayingBar from "../components/NavBar/PlayingBar.vue";

export default {
  components: {
    LeftNav,
    TopNav,
    PlayingBar,
  },
};
</script>

<style scoped>
.root-container {
  display: grid;
  grid-template-areas:
    "nav-bar top-bar"
    "nav-bar main-view"
    "now-playing-bar now-playing-bar";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #ddd;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 2px 8px #000000;
}
</style>

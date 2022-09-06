<template>
  <div class="root-container">
    <top-nav></top-nav>
    <left-nav></left-nav>
    <playing-bar></playing-bar>
    <main-view></main-view>
  </div>
</template>

<script>
import TopNav from "../NavBar/TopNav.vue";
import LeftNav from "../NavBar/LeftNav.vue";
import PlayingBar from "../NavBar/PlayingBar.vue";
import MainView from "../MainView/MainView.vue";

export default {
  components: {
    LeftNav,
    TopNav,
    PlayingBar,
    MainView,
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
}
</style>

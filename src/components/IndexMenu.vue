<template>
  <div class="root-container">
    <div class="top-nav-bar"></div>
    <div class="left-nav-bar"></div>
    <div class="bottom-now-playing-bar"></div>
    <div class="main-view"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  height: 100%;
  width: 100%;
}
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
.top-nav-bar {
  grid-area: top-bar;
  height: 64px;
  background-color: #6c6c6c;
}
.left-nav-bar {
  grid-area: nav-bar;
  background-color: #d26363d2;
  width: 230px;
  height: 100%;
}
.bottom-now-playing-bar {
  grid-area: now-playing-bar;
  height: 90px;
  background-color: #6c6c6c;
}
.main-view {
  grid-area: main-view;
}
</style>

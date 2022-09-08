<template>
  <div class="header">
    <img :src="playlist.coverImgUrl" />
  </div>
</template>

<script setup>
const props = defineProps(["playlist"]);
console.log("props");
console.log(props);
console.log("props");
</script>

<style>
div.header {
  background-color: #121212;
}
</style>

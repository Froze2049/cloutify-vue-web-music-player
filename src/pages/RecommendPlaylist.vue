<template>
  <div class="container">
    <el-scrollbar max-height="580px">
      <div class="playlist">
        <playlist-preview :requestNumber="requestNumber"></playlist-preview>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import PlaylistPreview from "@/components/PlayList/PlaylistPreview.vue";
const requestNumber = 30; // 设定歌单请求数量为30
</script>

<style scoped>
.container {
  grid-area: main-view;
  background-color: #121212;
}
div.playlist {
  margin-top: 20px;
}
</style>

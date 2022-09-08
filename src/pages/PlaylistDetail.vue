<template>
  <div class="container">
    <el-scrollbar max-height="591.8px">
      <playlist-header :playlist="playlist"></playlist-header>
      <playlist-content></playlist-content>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPlaylistDetail } from "@/request/api/playlist.js";
import PlaylistHeader from "@/components/PlayList/PlaylistHeader.vue";
import PlaylistContent from "@/components/PlayList/PlaylistContent.vue";

const playlist = ref([]);
onMounted(() => {
  const id = useRouter().currentRoute.value.query.id;
  console.log(id);
  getPlaylistDetail(id)
    .then((response) => {
      // 处理成功情况
      console.log(response);
      playlist.value = response.data.playlist;
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
});
</script>

<style scoped>
.main-view {
  grid-area: main-view;
  background-color: #121212;
}
</style>

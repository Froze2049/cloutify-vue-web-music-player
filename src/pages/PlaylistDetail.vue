<template>
  <div class="container">
    <el-scrollbar max-height="580px">
      <playlist-header
        v-if="headerIsReady"
        :createTime="createTime"
        :playlist="playlist"
        :creator="creator"
      ></playlist-header>
      <playlist-content
        v-if="songsIsReady"
        :allSongsFormat="allSongsFormat"
      ></playlist-content>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPlaylistDetail, getAllSongs } from "@/request/api/playlist.js";
import methods from "@/utils/index.js";
import PlaylistHeader from "@/components/PlayList/PlaylistHeader.vue";
import PlaylistContent from "@/components/PlayList/PlaylistContent.vue";

const playlist = ref([]);
const allSongsRaw = ref([]);
const allSongsFormat = ref([]);
const creator = ref(null);
const songsIsReady = ref(false);
const headerIsReady = ref(false);
const createTime = ref(null);
// 获取歌单详情
const onGetPlaylistDetail = (id) => {
  getPlaylistDetail(id)
    .then((response) => {
      // 处理成功情况
      playlist.value = response.data.playlist;
      creator.value = response.data.playlist.creator.nickname;
      createTime.value = response.data.playlist.createTime;
      headerIsReady.value = true;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      sessionStorage.setItem("itemDetail", JSON.stringify(playlist));
    });
};
// 获取歌单所有歌曲
const onGetAllSongs = (id) => {
  getAllSongs(id)
    .then((response) => {
      // 处理成功情况
      allSongsRaw.value = response.data.songs;
      console.log("ssss");
      console.log(allSongsRaw.value);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // 整理歌曲的数据
      allSongsFormat.value = methods.formatSongs(allSongsRaw.value);
      songsIsReady.value = true;
      console.log("ready");
      console.log(allSongsFormat.value);
    });
};
onMounted(async () => {
  songsIsReady.value = false;
  headerIsReady.value = false;
  const id = useRouter().currentRoute.value.query.id;
  console.log(id);
  onGetPlaylistDetail(id);
  onGetAllSongs(id);
});
</script>

<style scoped>
.container {
  grid-area: main-view;
  background-color: #121212;
}
el-scrollbar {
  background-color: #121212;
}
</style>

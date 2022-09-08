<template>
  <div class="container">
    <el-scrollbar height="600">
      <playlist-header
        :playlist="playlist"
        :creator="creator"
      ></playlist-header>
      <playlist-content
        v-if="songsIsReady"
        :allSongsFormat="allsongs"
      ></playlist-content>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPlaylistDetail, getAllSongs } from "@/request/api/playlist.js";
import PlaylistHeader from "@/components/PlayList/PlaylistHeader.vue";
import PlaylistContent from "@/components/PlayList/PlaylistContent.vue";

const playlist = ref([]);
const allSongsRaw = ref([]);
const allSongsFormat = ref([]);
const creator = ref(null);
let songsIsReady = false;
onMounted(async () => {
  songsIsReady = false;
  const id = useRouter().currentRoute.value.query.id;
  console.log(id);
  // 获取歌单详情
  getPlaylistDetail(id)
    .then((response) => {
      // 处理成功情况
      playlist.value = response.data.playlist;
      creator.value = response.data.playlist.creator.nickname;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      sessionStorage.setItem("itemDetail", JSON.stringify(playlist));
    });
  // 获取歌单所有歌曲
  getAllSongs(id)
    .then((response) => {
      // 处理成功情况
      // console.log("2");
      // console.log(response);
      allSongsRaw.value = response.data.songs;
      console.log("3");
      // console.log("3");
      // console.log(allSongsRaw.value);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // 整理歌曲的数据
      for (const [key, value] of Object.entries(allSongsRaw.value)) {
        let newSinger = value.ar[0].name;
        if (value.ar.length > 1) {
          for (let i = 1; i < value.ar.length; i++) {
            newSinger += "/" + value.ar[i].name;
          }
        }
        // console.log(newSinger);
        const albumName = value.al.name;
        const newSong = {
          index: +key + 1,
          title: value.name,
          singer: newSinger,
          album: albumName,
          time: 100,
        };
        allSongsFormat.value.push(newSong);
      }
      console.log(typeof songsIsReady);
      console.log(7);
      console.log(allSongsFormat.value);
    });
  setTimeout(() => {
    songsIsReady = !songsIsReady;
  }, 3000);
});
</script>

<style scoped>
.container {
  grid-area: main-view;
  background-color: #121212;
}
</style>

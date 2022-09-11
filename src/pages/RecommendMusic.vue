<template>
  <div class="container">
    <el-scrollbar max-height="580px" v-if="musicIsReady">
      <div class="card-container">
        <div
          class="card"
          v-for="(music, index) in allNewMusic"
          :key="index"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave()"
          @dblclick="playSong(index)"
        >
          <div
            :class="{ active: isActive !== index }"
            class="play iconfont icon-24gf-play"
          />
          <div :class="{ active: isActive === index }" class="index">
            {{ music.index }}
          </div>
          <div class="cover">
            <img :src="music.pic" alt="" />
          </div>
          <div class="detail">
            <div class="title">{{ music.title }}</div>
            <div class="singer">{{ music.singer }}</div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { getNewMusic } from "@/request/api/discovery.js";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
let allNewMusicRaw = [];
const allNewMusic = ref([]);
const musicIsReady = ref(false);
const isActive = ref(null);
const mouseEnter = (index) => {
  isActive.value = index;
};
const mouseLeave = () => {
  isActive.value = null;
};
const updatePlaylist = (value) => {
  store.commit("updatePlaylist", value);
};
const playSong = (index) => {
  const value = {};
  value.playlist = allNewMusic.value;
  value.index = index + 1;
  updatePlaylist(value);
  console.log("ok");
};
const onGetNewMusic = () => {
  musicIsReady.value = false;
  getNewMusic()
    .then((response) => {
      // 处理成功情况
      allNewMusicRaw = response.data.result;
      console.log("汇报3");
      console.log(allNewMusicRaw);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      for (const [key, item] of Object.entries(allNewMusicRaw)) {
        // 歌手名字
        let newArtist = item.song.artists[0].name;
        if (item.song.artists.length > 1) {
          for (let i = 1; i < item.song.artists.length; i++) {
            newArtist += "/" + item.song.artists[i].name;
          }
        }
        const newMusicItem = {
          index: +key + 1,
          id: item.id,
          title: item.name,
          pic: item.picUrl,
          singer: newArtist,
        };
        allNewMusic.value.push(newMusicItem);
      }
      musicIsReady.value = true;
      console.log("汇报4");
      console.log(allNewMusic.value);
    });
};

onMounted(() => {
  onGetNewMusic();
});
</script>

<style scoped>
.container {
  grid-area: main-view;
  background-color: #121212;
}
div.card-container {
  margin: 25px 0 0 25px;
  display: inline-flex;
  flex-wrap: wrap;
}
div.card {
  height: 140px;
  width: 415px;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: #181818;
  color: #fff;
  border-radius: 10px;
  user-select: none;
  transition: all 0.2s;
  margin: 0 20px 20px 0;
}
div.card:hover {
  background-color: #282828;
  transition: all 0.2s;
}
div.active {
  display: none;
}
div.card div.index,
div.card div.play {
  width: 20px;
  margin: 20px;
  text-align: center;
}
div.card div.cover img {
  height: 110px;
  border-radius: 10px;
  box-shadow: 2px 2px 15px #000000;
}
div.detail {
  margin-left: 20px;
}
div.detail .title {
  width: 200px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
div.detail .singer {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

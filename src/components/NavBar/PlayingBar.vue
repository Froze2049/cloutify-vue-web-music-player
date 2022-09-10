<template>
  <div class="bottom-now-playing-bar">
    <audio
      :src="songUrl"
      ref="music"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
    ></audio>
    <div class="container">
      <div class="song-info">
        <img class="song-cover" :src="songImg" />
        <div class="detail">
          <div class="title">{{ nowPlaying.title }}</div>
          <div class="singer">{{ nowPlaying.singer }}</div>
        </div>
      </div>
      <div class="main-controller">
        <div class="paly-controller">
          <span
            @click="pause"
            v-if="isPlaying"
            class="pause iconfont icon-24gf-pause2"
          />
          <span v-else @click="play" class="play iconfont icon-24gf-play" />
        </div>
        <div class="progress-bar">
          <el-slider
            :max="audio.maxTime"
            v-model="audio.currentTime"
            :show-tooltip="false"
          />
        </div>
      </div>
      <div class="side-controller">
        <div class="volume">
          <span class="iconfont icon-Volume" />
          <el-slider
            :step="0.01"
            :max="1"
            v-model="audio.volume"
            @input="voiceChange"
            :format-tooltip="handelVoice"
          >
          </el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSongDetail } from "@/request/api/player.js";
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const music = ref(null);
const isPlaying = computed(() => store.getters.isPlaying);
const nowPlaying = computed(() => store.getters.nowPlaying);
const audio = ref({
  // 播放状态
  playing: false,
  // 静音状态
  muted: false,
  // 音频当前播放时长
  currentTime: 0,
  // 音量
  volume: 1,
  // 音频最大播放时长
  maxTime: 0,
});

const songUrl = computed(
  () =>
    `https://music.163.com/song/media/outer/url?id=${nowPlaying.value.id}.mp3`
);
const songImg = computed(() => nowPlaying.value.pic);
const updateIsPlaying = (value) => {
  store.commit("updateIsPlaying", value);
};
const updateAudioDom = (value) => {
  store.commit("updateAudioDom", value);
};
// 更新音频流的当前播放时间
const onTimeupdate = (res) => {
  audio.value.currentTime = res.target.currentTime;
};
// 获取音频长度
const onLoadedmetadata = (res) => {
  audio.value.maxTime = parseInt(res.target.duration);
};
// 拖动进度滚动条
// const progressChange = () => {
//   console.log("拖动滚动条触发", this.cacheCurrent);
//   audio.value.currentTime = this.cacheCurrent;
//   audio.value.currentTime = this.cacheCurrent;
// };

// 拖动音量滚动条
const voiceChange = () => {
  music.value.volume = audio.value.volume;
};
// 音量提示
const handelVoice = () => {
  return parseInt(audio.value.volume.toFixed(2) * 100);
};
//播放
const play = () => {
  updateIsPlaying(true);
};
//暂停
const pause = () => {
  updateIsPlaying(false);
  console.log("wdeferfref");
  console.log(music.value.duration);
};
watch(songUrl, () => {
  console.log("dvg");
  console.log(music);
  updateIsPlaying(false);
  getSongDetail(nowPlaying.value.id)
    .then((response) => {
      // 处理成功情况
      nowPlaying.value.pic = response.data.songs[0].al.picUrl;
      console.log("汇报5");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
});
onMounted(() => {
  updateAudioDom(music.value);
});
</script>

<style scoped>
.bottom-now-playing-bar {
  grid-area: now-playing-bar;
  height: 90px;
  background-color: #181818;
  color: #fff;
}
div.container {
  width: calc(100%-32px);
  height: 60px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}
div.song-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  width: 238px;
  height: 60px;
}
img.song-cover {
  width: 60px;
  height: 60px;
  box-shadow: 0 0 8px #000000;
}
div.detail {
  height: 60px;
  margin: 0 14px;
}
div.title {
  width: 150px;
  font-weight: 600;
  font-size: 14px;
  margin: 9px 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
div.singer {
  width: 150px;
  font-size: 12px;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
div.main-controller {
  height: 58px;
  padding: 0 344px 0 240px;
}
div.paly-controller {
  width: 550px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 250px;
}
span.pause,
span.play {
  font-size: 30px;
  color: #fff;
}
span.pause:hover,
span.play:hover {
  color: #bababa;
}
div.progress-bar {
  display: flex;
  align-items: center;
}
div.progress-bar .el-slider,
div.side-controller .el-slider {
  width: 550px;
  --el-slider-button-size: 11px;
}
:deep .el-slider__runway {
  height: 5px;
}
div.side-controller {
  height: 100%;
  display: flex;
  align-items: center;
}
div.side-controller .el-slider {
  width: 100px;
}
div.volume {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
}
div.volume span {
  font-size: 20px;
  margin-right: 10px;
}
</style>

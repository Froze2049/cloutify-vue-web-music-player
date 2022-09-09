<template>
  <div class="bottom-now-playing-bar">
    <audio :src="songUrl" ref="music" @timeupdate="timeupdate"></audio>
    <div class="container">
      <div class="song-info">
        <img class="song-cover" :src="defaultImg" />
        <div class="detail">
          <div class="title">ALIEN SUPERSTAR ALIEN SUPERSTAR</div>
          <div class="singer">Beyonce</div>
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
        <div class="progress-bar"><el-slider :show-tooltip="false" /></div>
      </div>
      <div class="side-controller">
        <div class="volume">
          <el-slider> :show-tooltip="false" </el-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapActions(["playlist", "playlistIndex"]),
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    play() {
      this.$refs.audio.play();
    },
  },
};
</script> -->

<script setup>
import { ref, onMounted } from "vue";
import { mapState } from "vuex";
mapState(["playlist", "playlistIndex"]);
const defaultImg =
  "https://s4.music.126.net/style/web2/img/default/default_album.jpg";
const isPlaying = ref(false);
const songUrl = "https://music.163.com/song/media/outer/url?id=29535434";
const music = ref(null);
//播放
const play = () => {
  console.log("dfwf");
  music.value.play();
  isPlaying.value = true;
};
//暂停
const pause = () => {
  console.log("dfwf");
  music.value.pause();
  isPlaying.value = false;
};

onMounted(() => {
  // console.log(music.value);
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
  padding: 0 375px 0 240px;
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
::v-deep .el-slider__runway {
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
</style>

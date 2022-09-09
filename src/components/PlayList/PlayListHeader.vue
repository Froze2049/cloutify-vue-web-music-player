<template>
  <div class="header">
    <div
      class="background"
      :style="{ backgroundImage: `url(${playlist.coverImgUrl})` }"
    />
    <div class="content">
      <img :src="playlist.coverImgUrl" />
      <div class="button">
        <el-button type="primary" round class="normal" color="#1ed760">
          <el-icon class="iconfont icon-Play" />
          <span class="button-text">播放全部</span>
        </el-button>
        <el-button style="margin-left: 0" class="normal" round color="#282828">
          <el-icon class="iconfont icon-31shoucang" />
          <span class="button-text">收藏</span>
        </el-button>
        <el-button style="margin-left: 0" class="normal" round color="#282828">
          <el-icon class="iconfont icon-fenxiang" />
          <span class="button-text">分享</span>
        </el-button>
      </div>
      <div class="detail">
        <div class="title">
          <span class="tag">歌单</span>
          <span class="name"> {{ playlist.name }}</span>
        </div>
        <div class="info">
          <span class="user-name">{{ creator }}</span>
          <span class="date">{{ formatDate }}创建</span>
        </div>
        <div class="tags">
          标签：<span class="tag" v-for="tag in playlist.tags" :key="tag">{{
            tag
          }}</span>
        </div>
        <div class="description" :alt="playlist.description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { onMounted, ref, toRefs } from "vue";
const props = defineProps(["playlist", "creator"]);
const formatDate = ref("");
onMounted(() => {
  formatDate.value = moment(toRefs(props).playlist.value.createTime).format(
    "YYYY-MM-DD"
  );
});
console.log("props");
console.log(props);
</script>

<style>
div.header {
  background-color: #121212;
  overflow: hidden;
  position: relative;
  margin: 20px 20px 0 20px;
  height: 210px;
  border-radius: 10px;
}
div.background {
  width: 100%;
  height: 210px;
  display: flex;
  position: absolute;
  filter: blur(50px);
  border-radius: 10px;
}
div.content {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  height: 210px;
  padding: 1rem;
}
div.content img {
  border-radius: 8px;
  box-shadow: 0 0 8px #181818;
}
div.button {
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px 0 25px;
}
div.button .normal {
  color: #fff;
  width: 120px;
  margin: 10px 0 10px 0;
}
span.button-text {
  margin-top: 1px;
}
div.detail {
  color: #fff;
  font-size: 15px;
  /* margin-left: 10px; */
}
div.title {
  font-size: 24px;
  position: relative;
  margin-bottom: 10px;
}
span.name {
  white-space: nowrap;
  overflow: hidden;
}
span.user-name {
  margin-right: 10px;
}
span.tag {
  font-size: 14px;
  border: 1px solid #fff;
  padding: 2px 4px 2px 4px;
  border-radius: 5px;
  text-align: center;
  margin: 0 10px 0 0;
}
div.info,
div.tags,
div.description {
  margin-top: 15px;
}
div.description {
  height: 62px;
  overflow: scroll;
}
</style>

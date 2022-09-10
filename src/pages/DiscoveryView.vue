<template>
  <div class="main-view">
    <el-scrollbar max-height="580px">
      <div class="carousel">
        <el-carousel
          :interval="4000"
          type="card"
          height="235px"
          v-if="banners.length > 0"
        >
          <el-carousel-item v-for="banner in banners" :key="banner">
            <img :src="banner.imageUrl" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <playlist-preview></playlist-preview>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getBanner } from "@/request/api/discovery.js";
import PlaylistPreview from "@/components/PlayList/PlaylistPreview.vue";
let banners = ref([]);

onMounted(async () => {
  getBanner()
    .then((response) => {
      // 处理成功情况
      banners.value = response.data.banners;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
});
</script>

<style scoped>
.main-view {
  grid-area: main-view;
  background-color: #121212;
}
div.carousel {
  margin: 30px 40px 0 40px;
}
.el-carousel__item img {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

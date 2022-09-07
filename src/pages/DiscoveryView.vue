<template>
  <div class="main-view">
    <div class="carousel">
      <el-carousel
        :interval="4000"
        type="card"
        height="232px"
        v-if="banners.length > 0"
      >
        <el-carousel-item v-for="banner in banners" :key="banner">
          <img :src="banner.imageUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getBanner } from "../request/api/discovery.js";
let banners = ref([]);
onMounted(async () => {
  getBanner()
    .then((response) => {
      // 处理成功情况
      console.log(response);
      banners.value = response.data.banners;
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

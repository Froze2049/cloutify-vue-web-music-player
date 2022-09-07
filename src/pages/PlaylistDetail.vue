<template>歌单详情页</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPlaylistDetail } from "@/request/api/playlist.js";

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

<template>
  <div class="container">
    <div class="list">
      <div class="card" v-for="list in playLists" :key="list">
        <router-link :to="{ path: '/playlist', query: { id: list.id } }">
          <div class="top">
            <img :src="list.picUrl" class="image" />
          </div>
          <div class="bottom">
            <span class="description">{{ list.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPlayList } from "@/request/api/discovery";
import { ref, onMounted, toRefs } from "vue";

const props = defineProps(["requestNumber"]);
const playLists = ref([]);
onMounted(async () => {
  getPlayList(toRefs(props).requestNumber.value)
    .then((response) => {
      // 处理成功情况
      console.log(response);
      playLists.value = response.data.result;
      console.log(playLists.value);
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
div.list {
  display: inline-flex;
  flex-wrap: wrap;
}
div.card {
  border-radius: 5px;
  width: 200px;
  height: 230px;
  margin: 0 0 40px 19px;
  transition: all 0.5s;
  box-shadow: 0 0 8px #282828;
}
.router-link-active {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.bottom {
  width: 200px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  background-color: #181818;
  border-radius: 0 0 5px 5px;
  transition: all 0.2s;
}
.bottom:hover {
  background-color: #282828;
  transition: all 0.2s;
}
div.top {
  overflow: hidden;
}
.image {
  border-radius: 5px 5px 0 0;
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 5px 5px 0 0;
  transition: all 0.3s ease-in 0s;
}
.image:hover {
  transform: scale(1.2);
  transition: all 0.3s ease-in;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin: 0px 5px 0 5px;
  vertical-align: middle;
  color: #fff;
}
</style>

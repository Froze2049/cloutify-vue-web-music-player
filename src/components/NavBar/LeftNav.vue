<template>
  <div class="left-nav-bar">
    <div class="logo"></div>
    <ul>
      <li
        @click="updateSelectedItem('discovery')"
        :class="{ active: selectedItem === 'discovery' }"
      >
        <router-link :to="{ path: '/discovery' }">
          <div><span class="iconfont icon-icon-1"></span>发现音乐</div>
        </router-link>
      </li>
      <li
        @click="updateSelectedItem('playlist')"
        :class="{ active: selectedItem === 'playlist' }"
      >
        <router-link :to="{ path: '/discovery/playlist' }">
          <div><span class="iconfont icon-icon-2"></span>推荐歌单</div>
        </router-link>
      </li>
      <li
        @click="updateSelectedItem('music')"
        :class="{ active: selectedItem === 'music' }"
      >
        <router-link :to="{ path: '/discovery/music' }">
          <div><span class="iconfont icon-icon-"></span>最新音乐</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// import { useRoute } from "vue-router";

const store = useStore();
// const route = useRoute();
const selectedItem = computed(() => store.getters.selectedItem);
const updateSelectedItem = (value) => {
  store.commit("updateSelectedItem", value);
};
// onMounted(() => {
//   if (route.fullPath === "/discovery/music") {
//     updateSelectedItem("music");
//   } else if (route.fullPath === "/discovery/playlist") {
//     updateSelectedItem("playlist");
//   } else {
//     updateSelectedItem("discovery");
//   }
// });
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}
.left-nav-bar {
  grid-area: nav-bar;
  background-color: #000000;
  width: 190px;
  height: calc(100%-90px);
  padding: 0;
  margin: 0;
  /* border-radius: 20px 0 0 0; */
  font-size: 18px;
  color: #fff;
}
ul {
  width: 90%;
  padding: 0;
  margin: 15px 0 15px 7px;
  list-style: none;
  text-align: center;
  font-weight: 550;
}
li {
  padding: 5px 0 5px 0;
  margin-bottom: 10px;
  line-height: 60px;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;
}
li:hover,
li.active {
  border-radius: 7px;
  background-color: #282828;
  transition: all 0.2s;
}
span {
  font-size: 18px;
  margin-right: 5px;
}
</style>

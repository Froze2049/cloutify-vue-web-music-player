<template>
  <div class="top-nav-bar">
    <div class="switch">
      <span @click="back" class="iconfont icon-houtui"></span>
      <span @click="forward" class="iconfont icon-qianjin"></span>
    </div>
    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <input
        @keyup.enter="onSearch"
        type="text"
        placeholder="搜索"
        title="输入关键词搜索"
        v-model="enterValue"
        ref="input"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const enterValue = ref("");
const input = ref(null);

// 更新搜索值
const updateSearchValue = (value) => {
  store.commit("updateSearchValue", value);
};
const onSearch = () => {
  updateSearchValue(enterValue.value);
  router.push({ path: "/search", query: { keywords: enterValue.value } });
  enterValue.value = "";
  input.value.blur();
};
const back = () => {
  router.go(-1);
};
const forward = () => {
  router.go(1);
};
</script>

<style scoped>
.top-nav-bar {
  grid-area: top-bar;
  height: 64px;
  background-color: #1d0d46;
  /* border-radius: 0 20px 0 0; */
}
div.switch {
  height: 64px;
  line-height: 64px;
  margin-left: 10px;
  float: left;
}
div.switch span {
  font-size: 32px;
  color: #fff;
  margin-right: 5px;
}
span:hover {
  background-color: #614e93;
  border-radius: 5px;
}
div.search {
  float: left;
}
div.search span {
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  margin-left: 15px;
  color: #fff;
}
input {
  display: inline;
  margin-left: 10px;
  width: 150px;
  height: 32px;
  border-radius: 50px;
  border: 0;
  margin-top: 16px;
  background-color: #614e93;
  outline: none !important;
  color: #fff;
  margin-left: 5px;
  padding-left: 34px;
}
input:focus {
  border: 0;
}
</style>

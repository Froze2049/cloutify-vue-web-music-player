<template>
  <div class="container">
    <el-scrollbar max-height="580px">
      <div class="hint">
        <span>搜索"{{ store.getters.searchValue }}"，找到以下结果</span>
      </div>
      <playlist-content
        v-if="resultsIsReady"
        :allSongsFormat="allResultsFormat"
      ></playlist-content>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { getSearchResult } from "@/request/api/search.js";
import { useStore } from "vuex";
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import PlaylistContent from "@/components/PlayList/PlaylistContent.vue";
import methods from "@/utils/index.js";

const resultsIsReady = ref(false);
const store = useStore();
const router = ref(useRouter());
const allResultsRaw = ref([]);
const allResultsFormat = ref([]);
// 获取搜索结果
const onGetResults = () => {
  resultsIsReady.value = false;
  getSearchResult(store.getters.searchValue)
    .then((response) => {
      // 处理成功情况
      allResultsRaw.value = response.data.result.songs;
      console.log("汇报2");
      console.log(allResultsRaw.value);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      allResultsFormat.value = methods.formatResults(allResultsRaw.value);
      resultsIsReady.value = true;
      console.log("ready2");
      console.log(allResultsFormat.value);
    });
};

watch(router.value, () => {
  onGetResults();
});

onMounted(async () => {
  onGetResults();
});
</script>

<style>
.container {
  grid-area: main-view;
  background-color: #121212;
}
div.hint {
  color: #fff;
  margin: 20px 0 0 20px;
}
</style>

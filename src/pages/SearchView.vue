<template>
  <div class="container">
    <el-scrollbar max-height="580px">
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
import { ref, onMounted } from "vue";
import PlaylistContent from "@/components/PlayList/PlaylistContent.vue";
import methods from "@/utils/index.js";

const resultsIsReady = ref(false);
const store = useStore();
const allResultsRaw = ref([]);
const allResultsFormat = ref([]);

onMounted(async () => {
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
});
</script>

<style>
.container {
  grid-area: main-view;
  background-color: #121212;
}
</style>

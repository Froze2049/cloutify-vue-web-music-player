<template>
  <div class="table">
    <el-table
      @row-dblclick="playSong"
      :data="allSongsFormat"
      style="width: 100%"
    >
      <el-table-column prop="index" label="" width="80" />
      <el-table-column prop="title" label="标题" width="430">
        <template #default="scope">
          {{ scope.row.title }}
          <span v-if="scope.row.isVIP" class="tag">VIP</span>
        </template>
      </el-table-column>
      <el-table-column prop="singer" label="歌手" width="320" />
      <el-table-column prop="album" label="专辑" width="340" />
      <el-table-column prop="time" label="时间" />
    </el-table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { toRefs } from "vue";

const store = useStore();
const props = defineProps(["allSongsFormat"]);
const updatePlaylist = (value) => {
  store.commit("updatePlaylist", value);
};
const playSong = (row) => {
  const value = {};
  value.playlist = toRefs(props).allSongsFormat.value;
  value.index = row.index;
  updatePlaylist(value);
  console.log("ok");
};
</script>

<style scoped>
div.table {
  background-color: #121212;
  margin: 20px;
  border-radius: 10px 10px 0 0;
}
.el-table {
  padding: 0;
  border-radius: 10px 10px 0 0;
}
/*最外层透明*/
:deep .el-table,
:deep .el-table__expanded-cell {
  background-color: transparent !important;
}
/* 表格内背景颜色 */
:deep .el-table th {
  background-color: #181818 !important;
}
:deep .el-table tr,
:deep .el-table td {
  background-color: transparent !important;

  color: #fff;
}
/* 去除底边框 */
:deep.el-table td.el-table__cell {
  border-bottom: 1px solid #282828;
}
:deep.el-table th.el-table__cell.is-leaf {
  border: 0;
}
/*去除底部白条*/
:deep .el-table__inner-wrapper::before {
  display: none;
}
:deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #282828 !important;
}
span.tag {
  font-size: 13px;
  border: 1px solid #1ed760;
  padding: 0 2px;
  border-radius: 5px;
  text-align: center;
  margin-left: 5px;
  color: #1ed760;
}
</style>

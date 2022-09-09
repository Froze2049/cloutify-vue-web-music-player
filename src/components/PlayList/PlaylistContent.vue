<template>
  <div class="table">
    <el-table :data="allSongsFormat" style="width: 100%">
      <el-table-column prop="index" label="" width="80" />
      <el-table-column prop="title" label="标题" width="450" />
      <el-table-column prop="singer" label="歌手" width="320" />
      <el-table-column prop="album" label="专辑" width="320" />
      <el-table-column prop="time" label="时间" />
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps(["allSongsFormat"]);
console.log(8);
console.log(props);
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
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent !important;
}
/* 表格内背景颜色 */
::v-deep .el-table th {
  background-color: #181818 !important;
}
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent !important;

  color: #fff;
}
/* 去除底边框 */
::v-deep.el-table td.el-table__cell {
  border-bottom: 1px solid #282828;
}
::v-deep.el-table th.el-table__cell.is-leaf {
  border: 0;
}
/*去除底部白条*/
::v-deep .el-table__inner-wrapper::before {
  display: none;
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #282828 !important;
}
</style>

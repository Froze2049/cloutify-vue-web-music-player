<template>
  <div class="content">
    <div class="table">
      <el-table :data="allSongsFormat" style="width: 100%">
        <el-table-column prop="index" label="" width="180" />
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="singer" label="歌手" />
        <el-table-column prop="album" label="专辑" width="180" />
        <el-table-column prop="time" label="时间" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["allSongsFormat"]);
console.log(8);
console.log(props);
</script>

<style scoped>
div.content {
  background-color: #121212;
  color: #fff;
}
div.table {
  margin: 0 5px 0 5px;
}
.el-table {
  padding: 0;
}
/*最外层透明*/
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
/* 表格内背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
  background-color: transparent;
}
</style>

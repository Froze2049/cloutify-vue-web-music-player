<template>
  <div class="left-nav-bar">
    <div class="logo"></div>
    <ul>
      <li class="active"><span class="iconfont icon-icon-1"></span>发现音乐</li>
      <li><span class="iconfont icon-icon-2"></span>推荐歌单</li>
      <li><span class="iconfont icon-icon-"></span>最新音乐</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-nav-bar {
  grid-area: nav-bar;
  background-color: #000000;
  width: 190px;
  height: 100%;
  padding: 0;
  margin: 0;
  /* border-radius: 20px 0 0 0; */
  font-size: 18px;
  color: #fff;
}
.logo {
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
}
li:hover,
li.active {
  border-radius: 7px;
  background-color: #181818;
}
span {
  font-size: 18px;
  margin-right: 5px;
}
</style>

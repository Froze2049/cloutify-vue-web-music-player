<template>
  <div class="left-nav-bar">
    <div class="logo"></div>
    <ul>
      <li class="active">
        <router-link :to="{ path: '/discovery' }">
          <div><span class="iconfont icon-icon-1"></span>发现音乐</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/discovery/playlist' }">
          <div><span class="iconfont icon-icon-2"></span>推荐歌单</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/discovery/music' }">
          <div><span class="iconfont icon-icon-"></span>最新音乐</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
}
li:hover,
li.active {
  border-radius: 7px;
  background-color: #282828;
}
span {
  font-size: 18px;
  margin-right: 5px;
}
</style>

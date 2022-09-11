import service from "..";

// 获取首页轮播图
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=0",
  });
}

// 获取推荐歌单
export function getPlayList(num) {
  return service({
    method: "GET",
    url: `/personalized?limit=${num}`,
  });
}

// 推荐新音乐
export function getNewMusic() {
  return service({
    method: "GET",
    url: "/personalized/newsong?limit=18",
  });
}

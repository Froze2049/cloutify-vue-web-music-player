import service from "..";

// 获取首页轮播图
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=0",
  });
}

// 获取推荐歌单
export function getPlayList() {
  return service({
    method: "GET",
    url: "/personalized?limit=12",
  });
}

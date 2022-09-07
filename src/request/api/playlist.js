import service from "..";

// 获取首页轮播图
export function getPlaylistDetail(id) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${id}`,
  });
}

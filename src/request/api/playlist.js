import service from "..";

// 获取首页轮播图
export function getPlaylistDetail(id) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${id}`,
  });
}

// 获取歌单所有歌曲
export function getAllSongs(id) {
  return service({
    method: "GET",
    url: `/playlist/track/all?id=${id}&limit=50&offset=0`,
  });
}

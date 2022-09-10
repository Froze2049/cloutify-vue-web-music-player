import service from "..";

// 获取搜索结果
export function getSongDetail(id) {
  return service({
    method: "GET",
    url: `/song/detail?ids=${id}`,
  });
}

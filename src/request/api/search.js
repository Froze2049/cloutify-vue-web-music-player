import service from "..";

// 获取搜索结果
export function getSearchResult(value) {
  return service({
    method: "GET",
    url: `/search?keywords=${value}&limit=20&offset=0`,
  });
}

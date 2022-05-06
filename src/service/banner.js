import request from "./request";

// 获得轮播图图片
export function getAllBanner() {
  return request({
    url: `/cmsservice/bannerfront/getAllBanner`,
    method: "get",
  });
}

import request from "./request";

// 获取地址信息
export function getAllLocs() {
  return request({
    url: "/fooducenter/location/list",
    method: "get",
  });
}

// 添加地址信息
export function addLocation(locationInfo) {
  return request({
    url: "/fooducenter/location/addLocation",
    method: "post",
    data: locationInfo,
  });
}

// 修改地址信息
export function updateLocation(locationInfo) {
  return request({
    url: `/fooducenter/location/updateLocation`,
    method: "post",
    data: locationInfo,
  });
}

// 删除地址信息
export function removeLocation(id) {
  return request({
    url: `/fooducenter/location/addLocation${id}`,
    method: "delete",
  });
}

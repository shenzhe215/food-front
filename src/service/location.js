import request from "./request";

// 获取地址信息
export function getAllLocs() {
  return request({
    url: "/fooducenter/location/list",
    method: "get",
  });
}

// 获取默认信息
export function getDefaultLoc() {
  return request({
    url: "/fooducenter/location/defaultLocation",
    method: "get",
  });
}

// 获取最新三条信息
export function getLatestLocation() {
  return request({
    url: "/fooducenter/location/getLatestLocation",
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
    url: `/fooducenter/location/${id}`,
    method: "delete",
  });
}

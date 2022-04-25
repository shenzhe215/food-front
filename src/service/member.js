import request from './request';

export function getMemberList() {
  return request({
    url: "/userservice/list",
    method: "post",
  })
}

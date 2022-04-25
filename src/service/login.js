import request from "./request";
/* 手机号登录 */
export function gotoPhoneLogin(phone, password, md5_password, countrycode) {
  return request({
    url: "/login/cellphone",
    method: "get",
    params: {
      phone,
      password,
      countrycode,
      md5_password,
    },
  });
}

// 登录
export function submitLoginUser(userInfo) {
  return request({
    url: `/fooducenter/member/login`,
    method: "post",
    data: userInfo,
  });
}

//根据token获取用户信息
export function getLoginUserInfo() {
  return request({
    url: `/fooducenter/member/getMemberInfo`,
    method: "get",
  });
}

// 发送验证码
export function sendRegisterCode(phone) {
  return request({
    url: `/foodmsm/msm/send/${phone}`,
    method: "get",
  });
}

/* 注册 */
export function sendRegister(formItem) {
  return request({
    url: `/fooducenter/member/register`,
    method: "post",
    data: formItem,
  });
}

/* 更新 */
export function updateUserInfo(updateInfo) {
  return request({
    url: `/fooducenter/member/update`,
    method: "post",
    data: updateInfo,
  });
}

/* 修改密码 */
export function updatePassword(updateInfo) {
  return request({
    url: `/fooducenter/member/password`,
    method: "post",
    data: updateInfo,
  });
}

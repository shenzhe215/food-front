import { createFromIconfontCN } from "@ant-design/icons/lib";

export const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3351915_tm28a4p4v6.js", // 在 iconfont.cn 上生成
});

export const userTabs = [
  {
    title: "我的信息",
    link: "/user",
  },
  {
    title: "修改密码",
    link: "/user/password",
  },
  {
    title: "修改个人信息",
    link: "/user/edit",
  },
  {
    title: "我的地址",
    link: "/user/location",
  },
  {
    title: "我的优惠信息",
    link: "/user/coupon",
  },
];

export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service",
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy",
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html",
  },
  {
    title: "意见反馈",
    link: "#",
  },
];

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth",
  },
  {
    link: "https://music.163.com/recruit",
  },
  {
    link: "https://music.163.com/web/reward",
  },
  {
    link: "https://music.163.com/uservideo#/plan",
  },
];

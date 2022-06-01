import React from "react";
const FDLogin = React.lazy((_) => import("../pages/login/login"));
const FDRegister = React.lazy((_) => import("../pages/login/register"));
const DefaultLayout = React.lazy(() => import("../layout"));
const FDHome = React.lazy(() => import("../pages/home"));
const FDFood = React.lazy((_) => import("../pages/food"));
const FDFoodInfo = React.lazy((_) => import("../pages/food/info"));
const FDFoodSubmitOrder = React.lazy((_) =>
  import("../pages/order/submit-order")
);
const FDLocationInfo = React.lazy((_) =>
  import("../pages/user/mylocation/info")
);
const FDUserLocation = React.lazy((_) => import("../pages/user/mylocation"));
const FDPay = React.lazy((_) => import("../pages/order/pay/idnex"));
const FDOrder = React.lazy((_) => import("../pages/order"));
const FDUser = React.lazy((_) => import("../pages/user"));
const FDMyCoupon = React.lazy((_) => import("../pages/user/my-coupon"));
const FDCouponPage = React.lazy((_) => import("../pages/coupon"));
const PayInfo = React.lazy((_) =>
  import("../pages/order/pay/pay-message/idnex")
);
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    element: <FDHome />,
    meta: {
      title: "首页",
      needLogin: true,
    },
    key: true,
  },
  {
    path: "/login",
    element: <FDLogin />,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    element: <FDRegister />,
    meta: {
      title: "注册",
    },
  },
  {
    path: "/food",
    children: [
      { index: true, element: <FDFood /> },
      { path: "info/:id", element: <FDFoodInfo /> },
    ],
    meta: {
      title: "点菜",
      needLogin: true,
    },
  },
  {
    path: "/location",
    children: [
      { index: true, element: <FDUserLocation /> },
      { path: "info", element: <FDLocationInfo /> },
      { path: "info/:id", element: <FDLocationInfo /> },
    ],
    meta: {
      title: "位置",
      needLogin: true,
    },
  },
  {
    path: "/order",
    children: [
      { index: true, element: <FDOrder /> },
      { path: "submitorder", element: <FDFoodSubmitOrder /> },
      { path: "pay", element: <FDPay /> },
      { path: "pay/:id", element: <FDPay /> },
    ],
    meta: {
      title: "订单",
      needLogin: true,
    },
  },
  {
    path: "/pay/success",
    element: <PayInfo />,
  },
  {
    path: "/user",
    children: [
      { index: true, element: <FDUser /> },
      { path: ":type", element: <FDUser /> },
    ],
    meta: {
      title: "用户",
      needLogin: true,
    },
  },
  {
    path: "/coupon",
    element: <FDCouponPage />,
    meta: {
      title: "领券中心",
      needLogin: true,
    },
  },
];

/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义数据
 * @return {string} 需要跳转到其他页时返回该页的path路径
 */
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
  // 判断未登录跳转登录页
  if (meta.needLogin) {
    if (!localStorage.getItem("login")) {
      return "/login";
    }
  }
};

export default routes;

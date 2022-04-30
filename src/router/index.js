import React from "react";
import {
  lazyLoad,
  redirect,
  setRouteBefore,
} from "@/components/RouterGuard/fn";
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
  },
  {
    path: "/order",
    children: [
      { index: true, element: <FDOrder /> },
      { path: "submitorder", element: <FDFoodSubmitOrder /> },
      { path: "pay", element: <FDPay /> },
      { path: "pay/:id", element: <FDPay /> },
    ],
  },
  {
    path: "/user",
    children: [
      { index: true, element: <FDUser /> },
      { path: "submitorder", element: <FDFoodSubmitOrder /> },
      { path: "coupon", element: <FDMyCoupon /> },
    ],
  },
];

// 全局路由配置
const routes2 = [
  {
    path: "/",
    element: redirect("/home"),
  },
  {
    path: "/food",
    element: lazyLoad(() => import("../pages/food"), {
      title: "菜品",
      needLogin: true,
    }),
  },
  {
    path: "/home",
    element: lazyLoad(() => import("../pages/home"), {
      title: "菜品",
      needLogin: true,
    }),
  },
  {
    path: "/login",
    element: lazyLoad(() => import("../pages/food"), {
      title: "菜品",
      needLogin: true,
    }),
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
setRouteBefore(onRouteBefore);

export default routes;

// export default routes;

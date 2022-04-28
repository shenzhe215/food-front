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
const routes = [
  {
    path: "/",
    element: <FDHome />,
  },
  {
    path: "/home",
    element: <FDHome />,
  },
  {
    path: "/login",
    element: <FDLogin />,
  },
  {
    path: "/register",
    element: <FDRegister />,
  },
  {
    path: "/food",
    children: [
      { index: true, element: <FDFood /> },
      { path: "info/:id", element: <FDFoodInfo /> },
    ],
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
      // { path: "info/:id", element: <FDLocationInfo /> },
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

export default routes;

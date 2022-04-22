import React from "react";
const FDLogin = React.lazy((_) => import("../pages/login/login"));
const FDRegister = React.lazy((_) => import("../pages/login/register"));
const DefaultLayout = React.lazy(() => import("../layout"));
const FDFood = React.lazy((_) => import("../pages/food"));
const FDFoodInfo = React.lazy((_) => import("../pages/food/info"));
const FDFoodSubmitOrder = React.lazy((_) =>
  import("../pages/order/submit-order")
);
const FDLocationInfo = React.lazy((_) =>
  import("../pages/user/mylocation/info")
);
const FDUserLocation = React.lazy((_) => import("../pages/user/mylocation"));

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
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
  // {
  //   path: "/order",
  //   element: <FDOrder />,
  // },
  {
    path: "/submitorder",
    element: <FDFoodSubmitOrder />,
  },
];

export default routes;

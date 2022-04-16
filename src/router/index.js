import React from "react";
const FDLogin = React.lazy((_) => import("../pages/login/login"));
const FDRegister = React.lazy((_) => import("../pages/login/register"));
const FDHome = React.lazy((_) => import("../pages/home"));
const FDOrder = React.lazy((_) => import("../pages/order"));
const FDUser = React.lazy((_) => import("../pages/user"));
const FDFood = React.lazy((_) => import("../pages/food"));
const FDUserLocation = React.lazy((_) => import("../pages/user/mylocation"));
const FDLocationInfo = React.lazy((_) =>
  import("../pages/user/mylocation/info")
);
const routes = [
  {
    path: "/",
    element: <FDHome />,
    // children: [
    //   {
    //     index: true,
    //     element: <FDDiscover />,
    //   },
    //   { path: "user", element: <FDDiscover /> },
    //   { path: "user/detail/:id", element: <FDDiscover /> },
    // ],
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
    element: <FDFood />,
  },
  {
    path: "/order",
    element: <FDOrder />,
  },
  {
    path: "/location",
    // element: <FDUserLocation />,
    children: [
      { index: true, element: <FDUserLocation /> },
      { path: "info", element: <FDLocationInfo /> },
      { path: "info/:id", element: <FDLocationInfo /> },
    ],
  },
  {
    path: "/user",
    element: <FDUser />,
    children: [
      {
        path: "location",
        element: <FDUserLocation />,
      },
    ],
  },
];

export default routes;

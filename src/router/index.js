import React from "react";
const FDLogin = React.lazy((_) => import("../pages/login/login"));
const FDRegister = React.lazy((_) => import("../pages/login/register"));
const DefaultLayout = React.lazy(() => import("../layout"));
const FDFood = React.lazy((_) => import("../pages/food"));
const FDFoodInfo = React.lazy((_) => import("../pages/food/info"));
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
];

export default routes;

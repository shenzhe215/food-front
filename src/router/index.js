import React from "react";
const FDLogin = React.lazy((_) => import("../pages/login/login"));

const routes = [
  {
    path: "/",
    element: <FDLogin />,
  },
  {
    path: "/login",
    element: <FDLogin />,
  },
];

export default routes;

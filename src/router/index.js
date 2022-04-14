import React, { lazy } from "react";
import FDFoodList from "@/pages/foods/list";
import FDFood from "@/pages/foods/food";
import FDMemberList from "@/pages/members/list";
import FDMember from "@/pages/members/member";
import TableComponent from "../pages/table";


// import FDDiscover from "@/pages/discover";
const FDDiscover = lazy(() => import("@/pages/discover"));

const routes = [
  {
    path: "/",
    element: <FDDiscover />,
    children: [
      {
        index: true,
        element: <FDDiscover />,
      },
      { path: "user", element: <FDDiscover /> },
      { path: "user/detail/:id", element: <FDDiscover /> },
    ],
  },
  {
    path: "/foodservice",
    children: [
        { path: "list", element: <FDFoodList /> },
        { path: "food", element: <FDFood /> },
        { path: "food/:id", element: <FDFood /> }
    ],
  },
  {
    path: "/memberservice",
    children: [
        { path: "list", element: <FDMemberList /> },
        { path: "member", element: <FDMember /> }
    ],
  },
  {
    path: "/test",
    children: [
        { path: "table", element: <TableComponent /> }
    ],
  },
];

export default routes;

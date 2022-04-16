import React, { memo, Suspense } from "react";

import routes from "@/router";
import {
  Link,
  Navigate,
  Route,
  useNavigate,
  useRoutes,
} from "react-router-dom";

import { ContentWrapper } from "./style";
function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

const FDAppContent = memo(() => {
  return (
    <ContentWrapper>
      <RouteElement />
    </ContentWrapper>
  );
});

export default FDAppContent;

import React, { memo } from "react";
import { FDAppHeader, FDAppContent, FDAppFooter } from "../components/index";

import { FDAppWraper } from "./style";

const FDDefaultLayout = memo(() => {
  return (
    <FDAppWraper>
      <FDAppHeader />
      <FDAppContent />
    </FDAppWraper>
  );
});

export default FDDefaultLayout;

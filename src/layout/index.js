import React, { memo } from "react";
import { FDAppHeader, FDAppContent, FDAppFooter } from "../components/index";

import { FDAppWraper } from "./style";

const FDDefaultLayout = memo(() => {
  return (
    <FDAppWraper>
      <FDAppHeader />
      <FDAppContent />
      {/* <FDAppFooter /> */}
    </FDAppWraper>
  );
});

export default FDDefaultLayout;

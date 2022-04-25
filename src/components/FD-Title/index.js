import React, { memo } from "react";

import { FDTitleWraper } from "./style";

const FDTitle = memo((props) => {
  const { title } = props;

  return (
    <FDTitleWraper>
      <div className="HeadTitle">{title}</div>
    </FDTitleWraper>
  );
});

export default FDTitle;

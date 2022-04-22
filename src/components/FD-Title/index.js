import React, { memo } from "react";

import { FDTitleWraper } from "./style";

const FDTitle = memo((props) => {
  const {title} = props;

  return <FDTitleWraper>{title}</FDTitleWraper>;
});

export default FDTitle;

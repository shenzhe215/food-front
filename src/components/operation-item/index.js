import { Grid } from "antd-mobile";
import React, { memo } from "react";
import { Link } from "react-router-dom";

import { FDOperationItemWraper } from "./style";
const FDOperationItem = memo((props) => {
  const { info } = props;

  return (
    <Grid.Item>
      <FDOperationItemWraper>
        <Link to={info.key}>
          <div className="icon">{info.icon}</div>
          <h2 className="title">{info.title}</h2>
        </Link>
      </FDOperationItemWraper>
    </Grid.Item>
  );
});

export default FDOperationItem;

import React, { memo } from "react";
import { Grid } from "antd-mobile";

import { RightOutline } from "antd-mobile-icons"
import { FDOperationBoxWraper } from "./style";
import FDOperationItem from "../operation-item";
const FDOperationBox = memo((props) => {
  const { title, operations } = props;

  return (
    <FDOperationBoxWraper>
      <div className="titleRow">
        <span className="verticalLine"/>
        <h2>{title}</h2>
        {/* <div className="rightIcon"><RightOutline/></div> */}
      </div>
      <br/>
      {/* <div className="operationItem"> */}
      <Grid columns={4} gap={10}>
        {operations.map((operation, index) => (
          <FDOperationItem
            info={operation}
            key={index}
          ></FDOperationItem>
        ))}
        {/* </div> */}
      </Grid>
    </FDOperationBoxWraper>
  );
});

export default FDOperationBox;

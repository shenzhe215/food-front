import React, { memo } from "react";
import { FDFoodHeaderWraper, FDFoodContentWraper } from "./style";
const FDFood = memo(() => {
  return (
    <div className="FDFood">
      <FDFoodHeaderWraper>FDHeader</FDFoodHeaderWraper>
      <FDFoodContentWraper>FDContent</FDFoodContentWraper>
    </div>
  );
});

export default FDFood;

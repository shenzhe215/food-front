import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeBottomStateAction } from "@/components/app-bottom/store/actionCreators";
const FDHome = memo(() => {
  // states
  const dispath = useDispatch();

  // other states

  // hooks
  useEffect(() => {
    dispath(changeBottomStateAction(true));
  }, []);

  
  //   other hooks
  console.log("this is home");
  return <div>FDHome</div>;
});

export default FDHome;

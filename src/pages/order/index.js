import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FDOrderWraper } from "./style";
const FDOrder = memo(() => {
  // state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // other state

  // hookes
  useEffect(() => {
    console.log("welcome to order pane");
  }, []);
  // other hooks

  return (
    <FDOrderWraper>
 
    </FDOrderWraper>
  );
});

export default FDOrder;

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FDUserTabWraper } from "./style";
import { userTabs } from "@/common/local-data";

const FDUserTab = memo(() => {
  const navigate = useNavigate();
  const [curIndex, setCurIndex] = useState(0);

  // otherhooks
  const handleChange = (link) => {
    navigate(link);
  };
  return (
    <FDUserTabWraper>
      {userTabs?.map((tab, index) => (
        <span className="nav-tab" key={index}>
          <span
            className={index === curIndex ? "activeTitle" : "navTitle"}
            onClick={() => {
              setCurIndex(index);
              handleChange(tab.link);
            }}
          >
            {tab.title}
          </span>
          <span className="navCount"></span>
        </span>
      ))}
    </FDUserTabWraper>
  );
});

export default FDUserTab;

import React, { memo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FDUserTabWraper } from "./style";
import { userTabs } from "@/common/local-data";

const FDUserTab = memo(() => {
  const navigate = useNavigate();
  const [curIndex, setCurIndex] = useState(0);
  const params = useParams();
  const handleChange = (link) => {
    navigate(link);
  };

  useEffect(() => {
    // other hooks
    const { type } = params;
    switch (type) {
      case "password":
        setCurIndex(1);
        break;
      case "edit":
        setCurIndex(2);
        break;
      case "location":
        setCurIndex(3);
        break;
      case "coupon":
        setCurIndex(4);
        break;
      default:
        setCurIndex(0);
    }
  }, []);
  return (
    <FDUserTabWraper>
      {userTabs?.map((tab, index) => (
        <span className="nav-tab" key={index}>
          <div
            className={index === curIndex ? "activeTitle" : "navTitle"}
            onClick={() => {
              setCurIndex(index);
              handleChange(tab.link);
            }}
          >
            {tab.title}
          </div>
          <span className="navCount"></span>
        </span>
      ))}
    </FDUserTabWraper>
  );
});

export default FDUserTab;

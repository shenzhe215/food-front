import React, { memo } from "react";
import { Card, Space } from "antd-mobile";
import { EditSOutline } from "antd-mobile-icons";
import { FDLocationBoxWraper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCurrentLocationAction } from "../../pages/user/store/actionCreators";
const FDLocationBox = memo((props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { locationInfo } = props;

  const handleClick = () => {
    dispatch(changeCurrentLocationAction(locationInfo));
    navigate(`info/${locationInfo.id}`);
  };

  return (
    <FDLocationBoxWraper onClick={handleClick}>
      <div className="leftLocBox">
        <Space direction="vertical">
          <span className="locationTitle">{locationInfo.location}</span>
          <span className="locationUserInfo">
            <Space>
              <span>{locationInfo.username}</span>
              <span>{locationInfo.mobile}</span>
            </Space>
          </span>
        </Space>
      </div>
      <div className="rightLocBox">
        <EditSOutline />
      </div>
    </FDLocationBoxWraper>
  );
});

export default FDLocationBox;

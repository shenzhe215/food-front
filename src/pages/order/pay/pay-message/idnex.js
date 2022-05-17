import React, { memo, useState, useEffect } from "react";
import { Result } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { PaySuccessWraper } from "./style";
const PayInfo = memo(() => {
  // states
  const navigate = useNavigate();
  const [id, setId] = useState();
  const params = useParams();

  // hooks
  useEffect(() => {
    const { id } = params;
    setId(id);
  }, []);

  setTimeout(() => {
    navigate("/order");
  }, 3000);

  return (
    <PaySuccessWraper>
      <Result
        status="success"
        title="订单支付成功,页面跳转中……"
        subTitle={"订单号: " + id}
      />
    </PaySuccessWraper>
  );
});

export default PayInfo;

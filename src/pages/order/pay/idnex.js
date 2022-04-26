import React, { memo } from "react";

import { FDTitle } from "@/components";
import { PayWraper, PayUp, PayContent, PayBottom } from "./style";
import { Divider, Image } from "antd";
const FDPay = memo(() => {
  return (
    <PayWraper>
      <FDTitle title={"支付订单"}></FDTitle>
      <PayUp>支付订单</PayUp>
      <PayContent>
        <div className="contentUp">
          <h1>提交订单成功，请完成支付</h1>
          <p>
            请在<span>2小时</span>内完成支付
          </p>
        </div>
        <p className="border">支付方式</p>
        <div className="payWay">
          <div className="payItem">
            <div className="itemTitle alipay"></div>
            <div className="itemImg">
              {/* <img src={require("@/assets/img/alipayQR.jpg")} /> */}
              <Image width={150} src={require("@/assets/img/alipayQR.jpg")} />
            </div>
          </div>
          <div className="payItem">
            <div className="itemTitle wechat"></div>
            <div className="itemImg">
              <Image width={150} src={require("@/assets/img/wechatQR.png")} />
              {/* <img src={require("@/assets/img/wechatQR.png")} /> */}
            </div>
          </div>
        </div>
      </PayContent>
      <PayBottom>
        订单金额: <span>￥276</span>
      </PayBottom>
    </PayWraper>
  );
});

export default FDPay;

import React, { memo, useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { FDTitle } from "@/components";
import { PayWraper, PayUp, PayContent } from "./style";
import { Button, message, Steps, Modal } from "antd";
import { getUrl, getOrderInfo, getIpAddr } from "@/service/order";
import {
  changeFoodOrderCoutnAction,
  changeOrderListAction,
  changeOrderMoneyAction,
  changeOrderCoutnAction,
} from "../../food/store/actionCreators";
const { Step } = Steps;
const FDPay = memo(() => {
  // state
  const { orderNo, orderMoney } = useSelector(
    (state) => ({
      orderNo: state.getIn(["orderState", "orderNo"]),
      orderMoney: state.getIn(["foodState", "orderMoney"]),
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  // other state
  const [url, setUrl] = useState("");
  const [visiable, setVisiable] = useState(false);
  const [id, setId] = useState("");
  const [orderInfo, setOrderInfo] = useState({});

  const [socketUrl, setSocketUrl] = useState(
    "ws://192.168.43.15:8004/ws/" + params.id
  );
  const [messageHistory, setMessageHistory] = useState([]);

  const fetchIpAddr = () => {
    getIpAddr().then((res) => {
      if (res.code === 20000) {
        const ip = res.data.ip;
        console.log(ip);
        setSocketUrl("ws://" + ip + ":8004/ws/" + params.id);
        console.log("111");
      } else {
        message.error("获取ip失败", 1);
      }
    });
  };

  const getSocketUrl = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(socketUrl);
      }, 2000);
    });
  }, []);

  // hooks
  useEffect(() => {
    const { id } = params;
    setId(id);
    // 获取ip信息
    fetchIpAddr();
    // 获取订单信息
    getOrderInfo(id).then((res) => {
      if (res.code === 20000) {
        setOrderInfo(res.data.item);

        // 获取支付二维码
        getUrl(id).then((res) => {
          if (res.code === 20000) {
            setUrl(res.data.url);
          } else {
            message.error(res.message, 1);
          }
        });
      } else {
        message.error(res.message, 1);
      }
    });
  }, []);

  console.log("222");

  const { lastMessage, getWebSocket } = useWebSocket(getSocketUrl, {
    onOpen: () => {
      console.log("opened");
    },
    onClose: () => {
      console.log("closed");
    },
    onMessage: (msg) => {
      if (msg.data === "连接成功") {
        console.log("连接成功");
      }
      if (msg.data === "支付成功") {
        message.success("支付成功", 1);
        clearOrderState();
        navigate("/order");
      }
    },
    shouldReconnect: false,
  });

  // other hooks
  const payOrder = () => {
    console.log(payOrder);
  };

  // 清空redux订单状态
  const clearOrderState = useCallback(() => {
    // 清空订单信息
    dispatch(changeFoodOrderCoutnAction({}));
    dispatch(changeOrderListAction([]));
    dispatch(changeOrderMoneyAction(0));
    dispatch(changeOrderCoutnAction(0));
  });

  return (
    <PayWraper>
      <FDTitle title={"支付订单"}></FDTitle>
      <div className="step">
        <Steps current={1} labelPlacement="vertical">
          <Step title="1.确认订单信息" />
          <Step title="2.付款" />
          <Step title="3.确认收货" />
        </Steps>
      </div>
      <PayUp>
        <p>支付订单</p>
        <span>
          <Button
            type="default"
            onClick={() => {
              navigate("/order");
            }}
          >
            返回
          </Button>
        </span>
      </PayUp>
      <PayContent>
        <div className="contentUp">
          <h1>提交订单成功，请完成支付</h1>
          <p>
            请在<span>2小时</span>内完成支付
          </p>
        </div>
        <div className="payNum">
          订单金额:{" "}
          <span>
            {(orderInfo.rateFee > 0 && orderInfo.rateFee) || orderInfo.totalFee}
            ￥
          </span>
        </div>
        <p className="border">支付方式</p>
        <div className="payWay">
          <div className="payItem">
            <div className="itemTitle alipay"></div>
          </div>
          <div className="payItem">
            <div className="itemTitle wechat"></div>
          </div>
          <div className="payItem">
            <div
              className="itemTitle monitor"
              onClick={() => {
                setVisiable(!visiable);
              }}
            >
              模拟支付
            </div>
          </div>
        </div>
      </PayContent>
      <Modal
        visible={visiable}
        onCancel={() => {
          setVisiable(false);
        }}
        title={"请扫码"}
        footer={[
          <Button
            onClick={() => {
              setVisiable(false);
            }}
          >
            取消
          </Button>,
        ]}
      >
        <div className="itemImg">
          <img src={"data:image/jepg;base64," + url} width={200} />
        </div>
        {/* </div> */}
      </Modal>
    </PayWraper>
  );
});

export default FDPay;

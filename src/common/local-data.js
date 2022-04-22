import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const menus = [
  getItem("菜品首页", "/home", <MailOutlined />, []),
  getItem("开始点菜", "/food", <AppstoreOutlined />, [
    getItem("开始点菜", "5"),
    getItem("开始点菜", "6"),
    getItem("开始点菜", "7"),
  ]),
  getItem("订单查询", "/order", <SettingOutlined />, [
    getItem("订单查询", "9"),
    getItem("订单查询", "10"),
    getItem("订单查询", "11"),
    getItem("订单查询", "12"),
  ]),
];

// export const tabs = [
//   {
//     key: "/home",
//     title: "首页",
//     icon: <AppOutline />,
//   },
//   {
//     key: "/food",
//     title: "点餐",
//     icon: <UnorderedListOutline />,
//   },
//   {
//     key: "/order",
//     title: "订单",
//     icon: <MessageOutline />,
//   },
//   {
//     key: "/user",
//     title: "个人中心",
//     icon: <UserOutline />,
//   },
// ];

// export const myAssets = [
//   {
//     key: "/home",
//     title: "余额",
//     icon: <BillOutline />,
//   },
//   {
//     key: "/home",
//     title: "红包",
//     icon: <CollectMoneyOutline />,
//   },
//   {
//     key: "/home",
//     title: "券包",
//     icon: <CouponOutline />,
//   },
//   {
//     key: "/home",
//     title: "卡包",
//     icon: <BankcardOutline />,
//   },
// ];

// export const myOrders = [
//   {
//     key: "/home",
//     title: "待付款",
//     icon: <BankcardOutline />,
//   },
//   {
//     key: "/food",
//     title: "点餐",
//     icon: <UnorderedListOutline />,
//   },
//   {
//     key: "/order",
//     title: "订单",
//     icon: <MessageOutline />,
//   },
//   {
//     key: "/user",
//     title: "个人中心",
//     icon: <UserOutline />,
//   },
// ];

// export const recommendUtils = [
//   {
//     key: "/home",
//     title: "我的收藏",
//     icon: <HeartOutline />,
//   },
//   {
//     key: "/location",
//     title: "我的地址",
//     icon: <LocationOutline />,
//   },
//   {
//     key: "/home",
//     title: "设置",
//     icon: <SetOutline />,
//   },
//   {
//     key: "/home",
//     title: "意见反馈",
//     icon: <EditSOutline />,
//   },
// ];

export const foodTabs = [
  {
    key: "key1",
    title: "店铺招牌",
  },
  {
    key: "key2",
    title: "川菜",
  },
  {
    key: "key3",
    title: "海鲜",
  },
  {
    key: "key4",
    title: "凉菜",
  },
  {
    key: "key5",
    title: "烧烤",
  },
  {
    key: "key6",
    title: "酒水",
  },
  {
    key: "key7",
    title: "甜点",
  },
];

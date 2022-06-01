import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import "@/assets/css/reset.css";

import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ConfigProvider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <ConfigProvider locale={zhCN}>
//     <Provider store={store}>
//       debugger
//       <PersistGate loading={null} persistor={persistor}>
//         debugger
//         <App />
//       </PersistGate>
//     </Provider>
//   </ConfigProvider>,
//   document.getElementById("root")
// );

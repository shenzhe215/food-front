import React, { memo } from "react";
import {  HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import FDAppFooter from "@/components/app-footer";
import FDAppHeader from "@/components/app-header";
import FDAppContent from "./components/app-content";

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <FDAppHeader />
        <FDAppContent />
        <FDAppFooter />
      </HashRouter>
    </Provider>
  );
});

export default App;

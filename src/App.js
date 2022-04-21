import React, { memo, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

const FDLogin = React.lazy(() => import("./pages/login/login"));

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div>page loading</div>}>
          <Routes>
            <Route
              exact
              path="/login"
              name="Login Page"
              element={<FDLogin />}
            />
            {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
});

export default App;

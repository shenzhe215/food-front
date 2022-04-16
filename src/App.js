import React, { memo, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

const DefaultLayout = React.lazy(() => import("./layout"));
const FDLogin = React.lazy(() => import("./pages/login/login"));
const FDRegister = React.lazy(() => import("./pages/login/register"));

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
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<FDRegister />}
            />
            {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
});

export default App;

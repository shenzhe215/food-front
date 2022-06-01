import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cReducer from "./reducer";
// persist store
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
// 导入 transformer
import immutableTransform from 'redux-persist-transform-immutable'
// import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  transforms: [immutableTransform()],
  key: "root", // 必须有的
  storage: storage,
  // blacklist: ['loginStatus'] reducer 里不持久化的数据,除此外均为持久化数据
  whitelist: ["loginState", "foodState"], // reducer 里持久化的数据,除此外均为不持久化数据
};

const persistedReducer = persistReducer(persistConfig, cReducer);

// export default () => {
// let store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// let persistor = persistStore(store);
// return { store: store, persistor: persistor };
// };

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export let persistor = persistStore(store);

export default { store, persistor };
// const store = createStore(
//   cReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

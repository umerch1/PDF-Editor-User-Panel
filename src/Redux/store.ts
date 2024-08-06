import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig ={
  key: "root",
  version:1,
  storage,
}

const reducer = combineReducers({
  [myApi.reducerPath]:myApi.reducer,
  [myReducer.name]:myReducer.reducer
})

const persistedReducer =persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
export const persistor=persistStore(store);

import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { middlewares, reducers, runSaga } from "./ducks";

export const store = createStore(reducers, {}, middlewares);
export type AppDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
runSaga();

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export default store;

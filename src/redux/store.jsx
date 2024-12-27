import { createStore, applyMiddleware } from "redux";
import cartReducer from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(cartReducer, applyMiddleware(thunk));

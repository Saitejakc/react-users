import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const mainReducer = combineReducers({
  user: userReducer,
});

const commonData = {};

const Store = createStore(mainReducer, commonData, composeWithDevTools());

export default Store;

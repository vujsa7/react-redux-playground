import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { counterReducer, menuReducer } from "./reducers";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  combineReducers({ count: counterReducer, menu: menuReducer }),
  composeEnhancers()
);

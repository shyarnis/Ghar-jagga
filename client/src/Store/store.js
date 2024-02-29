import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import {
  houesOnSaleReducer,
  houseOnRentReducer,
} from "./Reducers/HouseFetchReducers";

const initialState = {};

const reducer = combineReducers({
  housesOnSale: houesOnSaleReducer,
  houseOnRent: houseOnRentReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

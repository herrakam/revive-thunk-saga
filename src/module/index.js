import { combineReducers } from "redux";
import counter, { countSaga } from "./counter";
import posts, { postSaga } from "./posts";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  posts,
});

export function* rootSaga() {
  yield all([postSaga(), countSaga()]);
}

export default rootReducer;

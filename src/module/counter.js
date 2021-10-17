import { put, delay, takeEvery } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});

export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* countSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeEvery(DECREASE_ASYNC, decreaseSaga);
}
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase()), 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

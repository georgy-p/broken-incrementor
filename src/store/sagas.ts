import { call, put, takeEvery, race, take } from "redux-saga/effects";
import { makeOperation } from "../api";
import {
  CANCEL_ACTION,
  DECREMENT_ASYNC, DECREMENT_BY_VALUE_ASYNC,
  INCREMENT_ASYNC,
  INCREMENT_BY_VALUE_ASYNC,
  setOperationLoading,
  setOperationSuccess, setStopLoading
} from './reducers/counter';
import { DecrementAction, DecrementByValueAction, IncrementAction, IncrementByValueAction } from './Interfaces';


function* increment({ payload }: IncrementAction) {
  yield put(setOperationLoading());
  const { result } = yield race({
    result: call(makeOperation, payload.value, 1),
    cancel: take(CANCEL_ACTION),
  });

  if (result || result === 0) {
    yield put(setOperationSuccess(result));
  } else {
    yield put(setStopLoading());
    console.log("Operation canceled");
  }
}

function* decrement({ payload }: DecrementAction) {
  yield put(setOperationLoading());
  const { result } = yield race({
    result: call(makeOperation, payload.value, -1),
    cancel: take(CANCEL_ACTION),
  });

  if (result || result === 0) {
    yield put(setOperationSuccess(result));
  } else {
    yield put(setStopLoading());
    console.log("Operation canceled");
  }
}

function* incrementByValue({ payload }: IncrementByValueAction) {
  yield put(setOperationLoading());
  const { result } = yield race({
    result: call(makeOperation, payload.value, payload.input),
    cancel: take(CANCEL_ACTION),
  });

  if (result || result === 0) {
    yield put(setOperationSuccess(result));
  } else {
    yield put(setStopLoading());
    console.log("Operation canceled");
  }
}

function* decrementByValue({ payload }: DecrementByValueAction) {
  yield put(setOperationLoading());
  const { result } = yield race({
    result: call(makeOperation, payload.value, -payload.input),
    cancel: take(CANCEL_ACTION),
  });

  if (result || result === 0) {
    yield put(setOperationSuccess(result));
  } else {
    yield put(setStopLoading());
    console.log("Operation canceled");
  }
}

export function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, increment);
  yield takeEvery(DECREMENT_ASYNC, decrement);
  yield takeEvery(INCREMENT_BY_VALUE_ASYNC, incrementByValue);
  yield takeEvery(DECREMENT_BY_VALUE_ASYNC, decrementByValue);
}
import { call, put, takeEvery } from "redux-saga/effects";
import { makeOperation } from "../api";
import {
  DECREMENT_ASYNC, DECREMENT_BY_VALUE_ASYNC,
  INCREMENT_ASYNC,
  INCREMENT_BY_VALUE_ASYNC,
  setOperationLoading,
  setOperationSuccess
} from './reducers/counter';
import { DecrementAction, DecrementByValueAction, IncrementAction, IncrementByValueAction } from './Interfaces';


function* increment({ payload }: IncrementAction) {
  yield put(setOperationLoading());
  const res: number = yield call(makeOperation, payload.value, 1)
  yield put(setOperationSuccess(res));
}

function* decrement({ payload }: DecrementAction) {
  yield put(setOperationLoading());
  const res: number = yield call(makeOperation, payload.value, -1)
  yield put(setOperationSuccess(res));
}

function* incrementByValue({ payload }: IncrementByValueAction) {
  yield put(setOperationLoading());
  const res: number = yield call(makeOperation, payload.value, payload.input)
  console.log(res);
  yield put(setOperationSuccess(res));
}

function* decrementByValue({ payload }: DecrementByValueAction) {
  yield put(setOperationLoading());
  const res: number = yield call(makeOperation, payload.value, -payload.input)
  yield put(setOperationSuccess(res));
}

export function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, increment);
  yield takeEvery(DECREMENT_ASYNC, decrement);
  yield takeEvery(INCREMENT_BY_VALUE_ASYNC, incrementByValue);
  yield takeEvery(DECREMENT_BY_VALUE_ASYNC, decrementByValue);
}

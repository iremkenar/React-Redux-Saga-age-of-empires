import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOAD_UNITS_ERROR,
  LOAD_UNITS_LOADING,
  LOAD_UNITS_SUCCESS,
  GET_UNIT_DETAIL,
} from './actions';
import Api from '../api';

async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Unexpected error!');
}

//worker saga
function* fetchUnits() {
  try {
    const units = yield fetchAsync(Api.getUnits);

    yield put({ type: LOAD_UNITS_SUCCESS, data: units });
    yield put({ type: GET_UNIT_DETAIL, data: units });
  } catch (e) {
    yield put({ type: LOAD_UNITS_ERROR, error: e.message });
  }
}

//watcher saga
export function* rootSaga() {
  // Allows concurrent fetches of units
  yield takeEvery(LOAD_UNITS_LOADING, fetchUnits);
  // Does not allow concurrent fetches of units   //
  yield takeLatest(LOAD_UNITS_LOADING, fetchUnits);
  yield takeLatest(GET_UNIT_DETAIL, fetchUnits);
}

export default rootSaga;

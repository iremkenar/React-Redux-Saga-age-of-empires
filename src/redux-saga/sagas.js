import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  // loadUnits,
  LOAD_UNITS_ERROR,
  LOAD_UNITS_LOADING,
  LOAD_UNITS_SUCCESS,
} from './actions';
import Api from '../api';

async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Unexpected error!!!');
}
function* fetchUnit() {
  try {
    const units = yield fetchAsync(Api.getUnits);

    yield put({ type: LOAD_UNITS_SUCCESS, data: units });
  } catch (e) {
    yield put({ type: LOAD_UNITS_ERROR, error: e.message });
  }
}

export function* unitsSaga() {
  // Allows concurrent fetches of units
  yield takeEvery(LOAD_UNITS_LOADING, fetchUnit);
  // Does not allow concurrent fetches of units   //
  yield takeLatest(LOAD_UNITS_LOADING, fetchUnit);
}
export default unitsSaga;

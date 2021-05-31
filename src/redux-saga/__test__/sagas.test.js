import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { fetchUnits } from '../sagas';
import Api from '../api';
import * as actions from '../actions';

const units = [1], // dummy values
const state = { units};
const getState = () => state;

test('getUnits Saga test', function (t) {
  const generator = fetchUnits(getState);

  let next = generator.next(actions.fetchUnits());
  t.deepEqual(next.value, call(Api.getUnits), 'must yield Api.getUnits');

  next = generator.next(units);
  t.deepEqual(
    next.value,
    put({ type: LOAD_UNITS_SUCCESS, data: units }),
    'must yield { type: LOAD_UNITS_SUCCESS, data: units }'
  );

  t.end();
});



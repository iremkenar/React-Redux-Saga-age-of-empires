import { default as reduxSaga } from './../redux-saga/reducer';
import { combineReducers } from 'redux';
//import { unitsReducer } from '../ducks/units';

const reducers = combineReducers({
  reduxSaga,
  //   units: unitsReducer,
});

export default reducers;

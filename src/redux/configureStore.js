import { combineReducers, createStore } from 'redux';
import unitsReducer from './ducks/units';

const reducer = combineReducers({
  units: unitsReducer,
});

const store = createStore(reducer);

export default store;

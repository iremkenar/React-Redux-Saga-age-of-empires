import React from 'react';
import '../App.scss';
import FiltersWithReduxSaga from '../redux-saga/FiltersWithReduxSaga';

const Filters = () => {
  return (
    <div>
      <FiltersWithReduxSaga />
    </div>
  );
};

export default Filters;

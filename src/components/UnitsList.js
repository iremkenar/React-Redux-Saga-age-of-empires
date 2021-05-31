import React from 'react';
import UnitsWithReduxSaga from '../redux-saga/UnitsWithReduxSaga';
// import UnitDetailPage from './UnitDetailPage';

import '../App.scss';

const UnitsList = () => {
  return (
    <div>
      <UnitsWithReduxSaga />
    </div>
  );
};

export default UnitsList;

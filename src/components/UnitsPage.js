import React from 'react';
import UnitsList from './UnitsList';
import Filters from './Filters';

const UnitsPage = () => {
  return (
    <div>
      <h1>Units Page</h1>
      <div className="units-page-container">
        <Filters />
        <UnitsList />
      </div>
    </div>
  );
};

export default UnitsPage;

import React, { useState, useEffect } from 'react';
import Api from '../api';
import UnitDetailWithReduxSaga from '../redux-saga/UnitDetailWithReduxSaga';
// import Table from 'react-bootstrap/Table';

const UnitDetailPage = ({ match }) => {
  useEffect(() => {
    fetchUnit();
    console.log(match);
  }, []);

  const [units, setUnits] = useState({});

  const fetchUnit = async () => {
    const fetchUnit = await fetch(
      `http://localhost:4000/units${match.params.id}`
    );
    const units = await fetchUnit.json();
    setUnits(units.units);
    console.log(units.units);
  };

  return (
    <div>
      <UnitDetailWithReduxSaga />
      {/* <h1>Unit Detail Page</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{units.units.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{units.units.name}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Min. Required Age:</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Wood Cost</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Food Cost</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Gold Cost</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Build Time</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Reload Time</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Hit Points</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>from data</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>from data</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
};

export default UnitDetailPage;

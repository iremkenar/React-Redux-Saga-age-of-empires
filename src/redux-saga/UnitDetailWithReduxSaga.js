import * as React from 'react';
import { connect } from 'react-redux';
import { getUnitDetailAction } from './actions';
import Table from 'react-bootstrap/Table';
import '../App.scss';

class UnitDetailWithReduxSaga extends React.Component {
  componentDidMount() {
    this.props.getUnitDetailAction();
  }

  render() {
    const unit = this.props.data.filter(
      (el) => el.id === +this.props.match.params.id
    );

    return (
      <div>
        <h1>Unit Detail Page</h1>
        <div className="table-container">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{unit[0].id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{unit[0].name}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{unit[0].description}</td>
              </tr>
              <tr>
                <td>Min. Required Age:</td>
                <td>{unit[0].age}</td>
              </tr>
              <tr>
                <td>Wood Cost</td>
                <td>{unit[0].cost.Wood}</td>
              </tr>
              <tr>
                <td>Food Cost</td>
                <td>{unit[0].cost.Food}</td>
              </tr>
              <tr>
                <td>Gold Cost</td>
                <td>{unit[0].cost.Gold}</td>
              </tr>
              <tr>
                <td>Build Time</td>
                <td>{unit[0].build_time}</td>
              </tr>
              <tr>
                <td>Reload Time</td>
                <td>{unit[0].reload_time}</td>
              </tr>
              <tr>
                <td>Hit Points</td>
                <td>{unit[0].hit_points}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{unit[0].attack}</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td>{unit[0].accuracy}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
});

const mapDispatchToProps = { getUnitDetailAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitDetailWithReduxSaga);

//With React Hooks

// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import '../App.scss';

// const UnitDetailPage = ({ match }) => {
//   //   console.log(props);
//   useEffect(() => {
//     fetchUnit();
//     console.log(match);
//   }, []);

//   const [unit, setUnit] = useState({
//     cost: {},
//   });

//   const fetchUnit = async () => {
//     const fetchUnit = await fetch(
//       `http://localhost:4000/units/${match.params.id}`
//     );
//     const unit = await fetchUnit.json();
//     setUnit(unit);
//     console.log(unit);
//   };

//   return (
//     <div>
//       <h1>Unit Detail Page</h1>
//       <div className="table-container">
//         <Table striped bordered hover>
//           <tbody>
//             <tr>
//               <td>ID:</td>
//               <td>{unit.id}</td>
//             </tr>
//             <tr>
//               <td>Name:</td>
//               <td>{unit.name}</td>
//             </tr>
//             <tr>
//               <td>Description:</td>
//               <td>{unit.description}</td>
//             </tr>
//             <tr>
//               <td>Min. Required Age:</td>
//               <td>{unit.age}</td>
//             </tr>
//             <tr>
//               <td>Wood Cost</td>
//               <td>{unit.cost.Wood}</td>
//             </tr>
//             <tr>
//               <td>Food Cost</td>
//               <td>{unit.cost.Food}</td>
//             </tr>
//             <tr>
//               <td>Gold Cost</td>
//               <td>{unit.cost.Gold}</td>
//             </tr>
//             <tr>
//               <td>Build Time</td>
//               <td>{unit.build_time}</td>
//             </tr>
//             <tr>
//               <td>Reload Time</td>
//               <td>{unit.reload_time}</td>
//             </tr>
//             <tr>
//               <td>Hit Points</td>
//               <td>{unit.hit_points}</td>
//             </tr>
//             <tr>
//               <td>Attack</td>
//               <td>{unit.attack}</td>
//             </tr>
//             <tr>
//               <td>Accuracy</td>
//               <td>{unit.accuracy}</td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default UnitDetailPage;

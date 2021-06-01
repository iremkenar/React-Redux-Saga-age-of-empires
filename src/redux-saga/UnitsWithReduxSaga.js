import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUnits } from './actions';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../App.scss';

function UnitsWithReduxSaga(props) {
  useEffect(() => {
    props.loadUnits();
  }, []);

  const mapData = (props) => {
    return props.data.map((el) => (
      <tr key={el.id}>
        <td>{el.id}</td>
        <Link to={`/unitDetailPage/${el.id}`}>
          <td>{el.name}</td>
        </Link>
        <td>{el.age}</td>
        <td>{filterCost(el.cost)}</td>
      </tr>
    ));
  };

  const filterCost = (cost) => {
    let costStr = '';
    if (cost) {
      costStr = Object.entries(cost)?.reduce(
        (acc, [key, value]) => `${acc} ${key}:${value}`,
        ''
      );
    }
    return costStr;
  };

  return (
    <div>
      {props.loading ? <div>Loading</div> : ''}
      {props.error ? (
        <div style={{ color: 'red' }}>ERROR: {props.error}</div>
      ) : (
        ''
      )}
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Costs</th>
            </tr>
          </thead>
          <tbody>{mapData(props)}</tbody>
        </Table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
  loading: state.reduxSaga.loading,
  error: state.reduxSaga.error,
});

const mapDispatchToProps = { loadUnits };

export default connect(mapStateToProps, mapDispatchToProps)(UnitsWithReduxSaga);

//*****************************With class component**********************//
// import * as React from 'react';
// import { connect } from 'react-redux';
// import { loadUnits } from './actions';
// import { Link } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import '../App.scss';

// class UnitsWithReduxSaga extends React.Component {
//   componentDidMount() {
//     this.props.loadUnits();
//   }

//   filterCost = (cost) => {
//     let costStr = '';
//     if (cost?.Wood) {
//       costStr = `Wood: ${cost.Wood}`;
//     }
//     if (cost?.Food) {
//       costStr =
//         costStr?.length > 0
//           ? `${costStr}, Food: ${cost.Food}`
//           : `Food: ${cost.Food}`;
//     }
//     if (cost?.Gold) {
//       costStr =
//         costStr?.length > 0
//           ? `${costStr}, Gold: ${cost.Gold}`
//           : `Gold: ${cost.Gold}`;
//     }
//     return costStr ? costStr : 'No cost';
//   };

//   render() {
//     if (this.props.loading) {
//       return <div>Loading</div>;
//     }
//     if (this.props.error) {
//       return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>;
//     }
//     return (
//       <div className="table-container">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Costs</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.data.map((el) => (
//               <tr key={el.id}>
//                 <td>{el.id}</td>
//                 <Link to={`/unitDetailPage/${el.id}`}>
//                   <td>{el.name}</td>
//                 </Link>
//                 <td>{el.age}</td>
//                 <td>{this.filterCost(el.cost)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   data: state.reduxSaga.data,
//   loading: state.reduxSaga.loading,
//   error: state.reduxSaga.error,
// });

// const mapDispatchToProps = { loadUnits };

// export default connect(mapStateToProps, mapDispatchToProps)(UnitsWithReduxSaga);

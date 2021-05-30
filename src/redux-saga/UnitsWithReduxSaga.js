import * as React from 'react';
import { connect } from 'react-redux';
import { loadUnits } from './actions';

class UnitsWithReduxSaga extends React.Component {
  componentDidMount() {
    this.props.loadUnits();
  }

  filterCost = (cost) => {
    let costStr = '';
    if (cost?.Wood) {
      costStr = `Wood: ${cost.Wood}`;
    }
    if (cost?.Food) {
      costStr =
        costStr?.length > 0
          ? `${costStr}, Food: ${cost.Food}`
          : `Food: ${cost.Food}`;
    }
    if (cost?.Gold) {
      costStr =
        costStr?.length > 0
          ? `${costStr}, Gold: ${cost.Gold}`
          : `Gold: ${cost.Gold}`;
    }
    return costStr ? costStr : 'No cost';
  };

  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }
    if (this.props.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Costs</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{this.filterCost(el.cost)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
  loading: state.reduxSaga.loading,
  error: state.reduxSaga.error,
});

const mapDispatchToProps = { loadUnits };

export default connect(mapStateToProps, mapDispatchToProps)(UnitsWithReduxSaga);

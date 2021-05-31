import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterUnit } from './actions';
import '../App.scss';
import { Button, ButtonGroup } from 'react-bootstrap';
import ContinuousSlider from '../components/Slider';

function FiltersWithReduxSaga(props) {
  useEffect(() => {
    props.filterUnit();
  }, []);

  const handleClick = (age) => {
    console.log(props.data.filter((unit) => unit.age.toString() === age));
  };

  return (
    <div>
      <h3>Ages</h3>
      <div className="filters-container">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => handleClick('All')} variant="primary">
            All
          </Button>
          <Button onClick={() => handleClick('Dark')} variant="primary">
            Dark
          </Button>
          <Button onClick={() => handleClick('Feudal')} variant="primary">
            Feudal
          </Button>
          <Button onClick={() => handleClick('Castle')} variant="primary">
            Castle
          </Button>
          <Button onClick={() => handleClick('Imperial')} variant="primary">
            Imperial
          </Button>
        </ButtonGroup>
        <h3>Costs</h3>
        <ContinuousSlider />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.reduxSaga.data,
  filteredTable: state.reduxSaga.filteredTable,
});

const mapDispatchToProps = { filterUnit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersWithReduxSaga);

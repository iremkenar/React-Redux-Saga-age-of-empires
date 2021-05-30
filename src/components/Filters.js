import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../App.scss';
import ContinuousSlider from './Slider';

const Filters = () => {
  return (
    <div>
      <h3>Ages</h3>
      <div className="filters-container">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">All</Button>
          <Button variant="primary">Dark</Button>
          <Button variant="primary">Feudal</Button>
          <Button variant="primary">Castle</Button>
          <Button variant="primary">Imperial</Button>
        </ButtonGroup>
        <h3>Costs</h3>
        <ContinuousSlider />
      </div>
    </div>
  );
};

export default Filters;

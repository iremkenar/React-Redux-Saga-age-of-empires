import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/unitsList">
          <li>Units</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navigation;

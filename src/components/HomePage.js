import React from 'react';
import MainImage from '../assets/age-of-empires.jpg';
import Image from 'react-bootstrap/Image';
import '../App.scss';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src={MainImage}
        className="hero-image"
        rounded
        alt="age-of-empires-image"
      />
    </div>
  );
};

export default HomePage;

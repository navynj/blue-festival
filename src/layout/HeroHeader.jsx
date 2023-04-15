import React from 'react';
import '../styles/hero-header.css';
import Featuring from '../components/hero-header/Featuring';
import Header from '../components/hero-header/Header';
import Introduce from '../components/hero-header/Introduce';
import Nav from '../components/hero-header/Nav';

const Top = () => {
  return (
    <>
      {/* autoPlay loop muted */}
      <video className="hero-bg">
        <source src="/video/blue-satin.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <div className="flex-between hero-titles">
          <Header />
          <Nav />
        </div>
        <div className="flex-between hero-description">
          <Featuring />
          <Introduce />
        </div>
      </div>
      <div className="hero-holder" />
    </>
  );
};

export default Top;

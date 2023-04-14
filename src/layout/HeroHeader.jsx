import React from 'react';
// @ts-ignore
import styles from '../styles/hero-header/HeroHeader.module.css';
import Featuring from '../components/hero-header/Featuring';
import Header from '../components/hero-header/Header';
import Introduce from '../components/hero-header/Introduce';
import Nav from '../components/hero-header/Nav';

const Top = () => {
  return (
    <div className="hero">
      {/* autoPlay loop muted */}
      <video id="hero-bg">
        <source src="/video/blue-satin.mp4" type="video/mp4" />
      </video>
      <Header />
      <Nav />
      <div>
        <Featuring />
        <Introduce />
      </div>
    </div>
  );
};

export default Top;

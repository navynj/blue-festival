import React from 'react';
// @ts-ignore
import styles from '../styles/hero-header/HeroHeader.module.css';
import Featuring from '../components/hero-header/Featuring';
import Header from '../components/hero-header/Header';
import Introduce from '../components/hero-header/Introduce';
import Nav from '../components/hero-header/Nav';

const Top = () => {
  return (
    <>
      {/* autoPlay loop muted */}
      <video className={styles.heroBg}>
        <source src="/video/blue-satin.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        <div className={styles.titles}>
          <Header />
          <Nav />
        </div>
        <div className={styles.description}>
          <Featuring />
          <Introduce />
        </div>
      </div>
      <div className={styles.holder} />
    </>
  );
};

export default Top;

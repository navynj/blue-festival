import React from 'react';
import '../../styles/hero-header.css';
import { introduceDescription } from '../../data/hero';

const Introduce = () => {
  return (
    <section className="hero-introduce">
      <h3>Introduce</h3>
      <div className="text-xl">{introduceDescription}</div>
      <a
        href="http://ticket.interpark.com/"
        target="_blank"
        className="button button-lg bg-black color-white text-2xl tracking-normal"
      >
        Get ticket &gt;
      </a>
    </section>
  );
};

export default Introduce;

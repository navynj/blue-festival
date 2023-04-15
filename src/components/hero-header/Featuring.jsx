import React from 'react';
import '../../styles/hero-header.css';
import { featuringList } from '../../data/hero';

const Featuring = () => {
  return (
    <section className="hero-featuring">
      <h3>Featuring</h3>
      <ul className="flex-row">
        {featuringList.map((item, i) => (
          <li key={i} className="w-full flex-column flex-start-center text-center">
            <div className="circle-md bg-white img-holder">
              <img src={item.img} />
            </div>
            <h6>{item.name}</h6>
            <p className="text-md">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featuring;

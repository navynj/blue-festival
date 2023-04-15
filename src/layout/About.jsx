import React from 'react';
import { aboutDescription, aboutHashtags, aboutKeyPoints } from '../data/about';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-main-container">
        <div className="flex-row about-main">
          <h2>About</h2>
          <div className="text-xl about-description">{aboutDescription}</div>
        </div>
        <ul className="about-hashtag text-md">
          {aboutHashtags.map((item, i) => (
            <li key={i}># {item}</li>
          ))}
        </ul>
        <img src="/images/long-blue.png" className="w-full" />
      </div>
      <ul className="about-key-points text-lg">
        {aboutKeyPoints.map((item, i) => (
          <li key={i} className="w-full flex-column">
            <h4>{item.title}</h4>
            <img src={item.src} />
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;

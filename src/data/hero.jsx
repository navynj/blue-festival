import React from 'react';

/**
 * @typedef Featuring
 * @prop {string} name The name of featruing artist
 * @prop {string} img The profile image of featuring artist
 * @prop {string} description The description of featruing artist
 */

/** @type Featuring[] */
export const featuringList = [
  {
    name: 'Cerulean',
    img: '/images/blue-paint-1.png',
    description: 'Cerulean Skies',
  },
  {
    name: 'Cobalt Hue',
    img: '/images/blue-paint-2.png',
    description: 'Cobalt Dreams',
  },
  {
    name: 'Prussian',
    img: '/images/blue-paint-1.png',
    description: 'Prussian Memories',
  },
  {
    name: 'Indigo',
    img: '/images/blue-paint-2.png',
    description: 'Indigo Nights',
  },
  {
    name: 'Azure',
    img: '/images/blue-paint-1.png',
    description: 'Azure Waves',
  },
];

export const introduceDescription = (
  <>
    <p>
      Join us at Blue Festival, where the beauty and power of blue music comes
      alive. Immerse yourself in a community of like-minded individuals and
      experience the magic of music that captures the spirit of the color blue.{' '}
    </p>
    <p>
      From the rich blues of indigo to the vibrant tones of cerulean, our
      festival showcases a diverse range of musical genres that will leave you
      feeling inspired and connected.{' '}
    </p>
    <p>
      Come and find your blue groove, celebrate the power of blue music, and
      join the blue revolution at Blue Festival.
    </p>
  </>
);

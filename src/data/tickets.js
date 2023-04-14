/**
 * @typedef Pass
 * @prop {string} name The type name of the pass
 * @prop {number} price The price of the pass
 * @prop {string[]} description The detail description of the pass
 */

/** @type Pass[] */
export const passList = [
  {
    name: 'General Admission Pass',
    price: 75,
    description: [
      'Provides access to both days of the festival',
      'Standing room only',
      'Access to all stages and vendor areas',
    ],
  },
  {
    name: 'Single Day Pass',
    price: 50,
    description: [
      'Provides access to the festival for one day only',
      'Standing room only',
      'Access to all stages and vendor areas',
    ],
  },
];

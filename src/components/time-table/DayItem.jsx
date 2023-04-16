import React from 'react';

/**
 *
 * @param {{day: number}} DayItemProps
 * @returns React.ReactNode
 */
const DayItem = ({ day }) => {
  return (
    <div className="day-item text-center">
      <h4>Day</h4>
      <span className="text-4xl">{day}</span>
    </div>
  );
};

export default DayItem;

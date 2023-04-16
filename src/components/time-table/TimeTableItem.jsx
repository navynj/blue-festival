import React from 'react';
import { tableList } from '../../data/time-table';
import DayItem from './DayItem';

/**
 *
 * @param {{dayNum: number, reverse?: boolean}} TimeTableItemProps
 * @returns React.ReactNode
 */
const TimeTableItem = ({ dayNum, reverse }) => {
  const table = (
    <ol key="table" className="table">
      {tableList[dayNum - 1].map((item, i) => (
        <li key={i} className="text-lg">
          {item}
        </li>
      ))}
    </ol>
  );

  const day = <DayItem key="day" day={dayNum} />;

  return (
    <div className="time-table-item flex-row">
      {reverse ? [table, day] : [day, table]}
    </div>
  );
};

export default TimeTableItem;

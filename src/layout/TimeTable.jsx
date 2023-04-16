import React from 'react';
import '../styles/time-table.css';
import { timeList } from '../data/time-table';
import TimeTableItem from '../components/time-table/TimeTableItem';

const TimeTable = () => {
  return (
    <section id="time-table">
      <h2 className="text-center">Time Table</h2>
      <div className="time-table-content flex-row flex-center-center">
        <TimeTableItem dayNum={1} />
        <ol className="text-2xl text-black time-list">
          {timeList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <TimeTableItem dayNum={2} reverse={true} />
      </div>
    </section>
  );
};

export default TimeTable;

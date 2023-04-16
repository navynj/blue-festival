import React from 'react';
import '../styles/tickets.css';
import { passList } from '../data/tickets';

const Tickets = () => {
  return (
    <section id="tickets" className="flex-between">
      <div className="tickets-title">
        <h2>Tickets</h2>
        <img src="/images/blue-square-4.png" className="square-lg" />
      </div>
      <ul className="flex-row pass-list">
        {passList.map((pass) => (
          <li className="flex-column">
            <h4 className="capitalize">{pass.name}</h4>
            <div className="price text-3xl text-black">${pass.price}</div>
            <ul className="pass-description">
              {pass.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a
              href="http://ticket.interpark.com/"
              target="_blank"
              className="button button-md bg-white color-black"
            >
              Get Ticket &gt;
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tickets;

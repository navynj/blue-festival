import React from 'react';
import About from './layout/About';
import Footer from './layout/Footer';
import HeroHeader from './layout/HeroHeader';
import Tickets from './layout/Tickets';
import TimeTable from './layout/TimeTable';

function App() {
  return (
    <div id="container">
      <HeroHeader />
      <main>
        <About />
        <TimeTable />
        <Tickets />
      </main>
      <div id="top">
        <button
          className="color-white"
          onClick={() => {
            scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ↑<br />
          Top
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;

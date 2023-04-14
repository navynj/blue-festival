import React from 'react';
import Button from './components/ui/Button';
import { BUTTON_TYPE } from './constants/types';
import About from './layout/About';
import Footer from './layout/Footer';
import HeroHeader from './layout/HeroHeader';
import Tickets from './layout/Tickets';
import TimeTable from './layout/TimeTable';

function App() {
  return (
    <div>
      <HeroHeader />
      <main>
        <About />
        <TimeTable />
        <Tickets />
      </main>
      <Button type={BUTTON_TYPE.WHITE}>Top</Button>
      <Footer />
    </div>
  );
}

export default App;

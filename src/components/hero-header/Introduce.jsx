import React from 'react';
import styles from '../../styles/hero-header/Introduce.module.css';
import { introduceDescription } from '../../data/hero';
import Button from '../ui/Button';
import { BUTTON_TYPE } from '../../constants/types';

const Introduce = () => {
  return (
    <section className={styles.container}>
      <h5>Introduce</h5>
      {introduceDescription}
      <Button style={BUTTON_TYPE.BG_BLACK}>Get ticket &gt;</Button>
    </section>
  );
};

export default Introduce;

import React from 'react';
import styles from '../../styles/ui/Button.module.css';

const Button = ({ style, onClick = undefined, className = '', children }) => {
  return (
    <button
      className={`${styles.button} ${styles[style]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

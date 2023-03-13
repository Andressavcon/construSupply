import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as LogoFooter } from '../Assets/construSupplyFooter.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <LogoFooter />
      <p>ConstruSupply. Alguns Direitos Reservados.</p>
    </div>
  );
};

export default Footer;

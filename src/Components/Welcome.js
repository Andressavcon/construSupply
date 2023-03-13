import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section className={styles.home}>
      <div className={styles.welcomeV}>
        <div className={styles.welcomeH}>
          <h1 className="title">Bem vindo(a) a </h1>
          <h2 className="title">ConstruSupply!</h2>
          <p> A rede de fornecedores da construção moderna.</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

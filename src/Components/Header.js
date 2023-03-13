import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as ConstruSupply } from '../Assets/construSupply.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={` ${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Constru Supply - Home">
          <ConstruSupply />
        </Link>
        <Link className={styles.fornecedores} to="/fornecedores">
          <span className={styles.span}>Fornecedores</span>
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            <span className={styles.span}>Login / Criar</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

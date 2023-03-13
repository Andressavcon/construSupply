import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Helper/Image';
import styles from './CardContent.module.css';
import { UserContext } from '../../UserContext';
import CardDelete from './CardDelete';

const CardContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { fornecedor } = data;

  return (
    <div className={`${styles.card} ${single ? styles.single : ''}`}>
      <div className={styles.details} >
        <div >
          <Image
            className={styles.img}
            src={fornecedor.src}
            alt={fornecedor.title}
          />
          <h1 className="title">
            <Link className={styles.title} to={`/fornecedor/${fornecedor.id}`}>
              {fornecedor.title}
            </Link>
          </h1>
          <p className={styles.infos}>
            <span className={styles.visualizacoes}>{fornecedor.acessos}</span>
            {user.data && user.data.username === fornecedor.author ? (
              <CardDelete id={fornecedor.id} />
            ) : (
              ''
            )}
          </p>

          <ul className={styles.attributes}>
            <p>Contato: </p>
            <li>Nome: {fornecedor.nome_contato}</li>
            <li>Telefone: {fornecedor.telefone}</li>
            <li>Email: {fornecedor.email}</li>
            <li>Endereço: {fornecedor.endereco}</li>
            <li>Cidade: {fornecedor.cidade}</li>
            <li>Estado: {fornecedor.estado}</li>
            <li>Website: {fornecedor.url_website}</li>
          </ul>
        </div>

        <div>
          <ul className={styles.attributes}>
            <p>Regiões que atende:</p>
            <li>{fornecedor.regioes}</li>
            <br />
            <p>Soluções: </p>
            <li>{fornecedor.solucoes}</li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardContent;

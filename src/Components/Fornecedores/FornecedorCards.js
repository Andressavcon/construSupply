import React from 'react';
import FornecedorCardsItem from './FornecedorCardsItem';
import useFetch from '../../Hooks/useFetch';
import { FORNECEDORES_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FornecedorCards.module.css';

const FornecedorCards = ({ page, user, setModalCard, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchCards() {
      const total = 9;
      const { url, options } = FORNECEDORES_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchCards();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.fornecedor} animeLeft`}>
        {data.map((card) => (
          <FornecedorCardsItem
            key={card.id}
            card={card}
            setModalCard={setModalCard}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FornecedorCards;

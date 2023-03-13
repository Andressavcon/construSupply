import React from 'react'
import styles from './FornecedorModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { FORNECEDOR_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import CardContent from '../Card/CardContent';

const FornecedorModal = ({card, setModalCard}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const {url, options} = FORNECEDOR_GET(card.id);
    request(url, options);
  },[card, request])

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalCard(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading loading={loading} />}
      {data && <CardContent data={data} />}
    </div>
  )
}

export default FornecedorModal
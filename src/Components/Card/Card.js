import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { FORNECEDOR_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import CardContent from './CardContent';

const Card = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = FORNECEDOR_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading loading={loading} />;
  if (data)
    return (
      <section className="container mainContainer">
        <CardContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Card;

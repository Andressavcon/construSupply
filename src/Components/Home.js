import React from 'react';
import Head from './Helper/Head';
import Solucoes from './Solucoes';
import Welcome from './Welcome';

const Home = () => {
  return (
    <>
      <section className='animeLeft'>
        <Head
          title="Home"
          description="Home do site ConstruSupply, com o filtro de regiões"
        />
        <div>
          <Welcome />
          <Solucoes />
        </div>
      </section>
    </>
  );
};

export default Home;

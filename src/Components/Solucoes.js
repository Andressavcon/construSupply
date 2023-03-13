import React from 'react';
import '../App.css';
import GetList from './GetList';
import SolucoesRow from './SolucoesRow';

const Solucoes = () => {
  const [solucoesList, setSolucoesList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await GetList.getList();
      setSolucoesList(list);
      console.log(list);
    };
    loadAll();
  }, []);

  return (
    <div className="mainContainer">
      <section className="lists">
        {solucoesList.map((item, key) => (
          <SolucoesRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default Solucoes;

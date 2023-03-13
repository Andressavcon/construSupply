import React from 'react';

const FornecedorGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://construsupply.test/json/api/fornecedor/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default FornecedorGet;

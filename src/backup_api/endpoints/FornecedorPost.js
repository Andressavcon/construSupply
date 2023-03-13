import React from 'react';

const FornecedorPost = () => {
  const [token, setToken] = React.useState('');

  const [fornecedor, setFornecedor] = React.useState('');
  const [nome_contato, setNome_contato] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [uf, setUf] = React.useState('');
  const [url_website, setUrl_website] = React.useState('');
  const [regioes, setRegioes] = React.useState('');
  const [solucoes, setSolucoes] = React.useState('');
  const [componentes, setComponentes] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('fornecedor', fornecedor);
    formData.append('nome_contato', nome_contato);
    formData.append('telefone', telefone);
    formData.append('email', email);
    formData.append('endereco', endereco);
    formData.append('cidade', cidade);
    formData.append('estado', estado);
    formData.append('uf', uf);
    formData.append('url_website', url_website);
    formData.append('regioes', regioes);
    formData.append('solucoes', solucoes);
    formData.append('componentes', componentes);

    fetch('http://construsupply.test/json/api/fornecedor', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
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
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="fornecedor"
        value={fornecedor}
        onChange={({ target }) => setFornecedor(target.value)}
      />
      <input
        type="text"
        placeholder="nome_contato"
        value={nome_contato}
        onChange={({ target }) => setNome_contato(target.value)}
      />
      <input
        type="text"
        placeholder="telefone"
        value={telefone}
        onChange={({ target }) => setTelefone(target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        placeholder="endereco"
        value={endereco}
        onChange={({ target }) => setEndereco(target.value)}
      />
      <input
        type="text"
        placeholder="cidade"
        value={cidade}
        onChange={({ target }) => setCidade(target.value)}
      />
      <input
        type="text"
        placeholder="estado"
        value={estado}
        onChange={({ target }) => setEstado(target.value)}
      />
      <input
        type="text"
        placeholder="uf"
        value={uf}
        onChange={({ target }) => setUf(target.value)}
      />
      <input
        type="text"
        placeholder="url_website"
        value={url_website}
        onChange={({ target }) => setUrl_website(target.value)}
      />
      <input
        type="text"
        placeholder="regioes"
        value={regioes}
        onChange={({ target }) => setRegioes(target.value)}
      />
      <input
        type="text"
        placeholder="solucoes"
        value={solucoes}
        onChange={({ target }) => setSolucoes(target.value)}
      />
      <input
        type="text"
        placeholder="componentes"
        value={componentes}
        onChange={({ target }) => setComponentes(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />

      <button>Enviar</button>
    </form>
  );
};

export default FornecedorPost;

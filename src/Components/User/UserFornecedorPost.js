import React from 'react';
import styles from './UserFornecedorPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { FORNECEDOR_POST } from '../../Api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Checkbox1 from '../Forms/Checkbox1';
import Head from '../Helper/Head';
import Checkbox2 from '../Forms/Checkbox2';

const UserFornecedorPost = () => {
  const fornecedor = useForm();
  const nome_contato = useForm();
  const telefone = useForm();
  const email = useForm();
  const endereco = useForm();
  const cidade = useForm();
  const estado = useForm();
  const uf = useForm();
  const url_website = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();
  const [estados, setEstados] = React.useState([]);
  const [solucoes, setSolucoes] = React.useState([]);
  const checkRegioes = estados.join(', ');
  const checkSolucoes = solucoes.join(', ');
  //console.log(checkRegioes);
  //console.log(checkSolucoes);


  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('fornecedor', fornecedor.value);
    formData.append('nome_contato', nome_contato.value);
    formData.append('telefone', telefone.value);
    formData.append('email', email.value);
    formData.append('endereco', endereco.value);
    formData.append('cidade', cidade.value);
    formData.append('estado', estado.value);
    formData.append('uf', uf.value);
    formData.append('url_website', url_website.value);
    formData.append('regioes', checkRegioes);
    formData.append('solucoes', checkSolucoes);
    formData.append('componentes', '');

    const token = window.localStorage.getItem('token');
    const { url, options } = FORNECEDOR_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.fornecedorPost} animeLeft`}>
      <Head title="Editar Perfil" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Fornecedor"
          type="text"
          name="fornecedor"
          {...fornecedor}
        />
        <Input
          label="Nome Contato"
          type="text"
          name="nome_contato"
          {...nome_contato}
        />
        <Input label="Telefone" type="text" name="telefone" {...telefone} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Endereço" type="text" name="endereco" {...endereco} />
        <Input label="Cidade" type="text" name="cidade" {...cidade} />
        <Input label="Estado" type="text" name="estado" {...estado} />
        <Input label="UF" type="text" name="uf" {...uf} />
        <Input
          label="WebSite"
          type="text"
          name="url_website"
          {...url_website}
        />
        <Checkbox1
          label="Regiões Atendidas"
          value={estados}
          setValue={setEstados}
        />
        <Checkbox2 label="Soluções" value={solucoes} setValue={setSolucoes} />
        <div className={styles.imgPreview}>
          {img.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
          <input
            className={styles.file}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
        </div>
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default UserFornecedorPost;

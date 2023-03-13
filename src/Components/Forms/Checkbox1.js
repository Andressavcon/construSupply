import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox1 = ({ label, value, setValue }) => {
  const regioes = [
    'AC - Acre',
    'AL - Alagoas',
    'AM - Amazonas',
    'AP - Amapá',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goiás',
    'MA - Maranhão',
    'MG - Minas Gerais',
    'MS - Mato Grosso do Sul',
    'MT - Mato Grosso',
    'PA - Pará',
    'PB - Paraíba',
    'PE - Pernambuco',
    'PI - Piauí',
    'PR - Paraná',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RO - Rondônia',
    'RR - Roraima',
    'RS - Rio Grande do Sul',
    'SC - Santa Catarina',
    'SE - Sergipe',
    'SP - São Paulo',
    'TO - Tocantins',
  ];

  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <>
      <label className={styles.label}>{label}</label>
      <div  className={styles.checkbox}>
      {regioes.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
      </div>
    </>
  );
};

export default Checkbox1;

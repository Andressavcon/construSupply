import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox2 = ({ label, value, setValue }) => {
  const solucoes = [
    'Fundação',
    'Estruturas de Paredes',
    'Contraventamento de Paredes',
    'Membranas e vedações',
    'Lajes e coberturas ',
    'Isolamento termoacustico',
    'Impermeabilizações',
    'Esquadrias',
    'Revestimento externo',
    'Revestimento Interno',
    'Instalações Hidraulicas e Elétricas',
    'Acabamentos Hidraulicos e Elétricos',
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
      {solucoes.map((option) => (
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

export default Checkbox2;

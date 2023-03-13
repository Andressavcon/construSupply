import React from 'react';
import styles from './SolucoesRow.module.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

const SolucoesRow = ({ title, items }) => {
  const [scrollX, setScrollX] = React.useState(0);
  const navigate = useNavigate();


  function handleClick(item) {
    navigate(`/fornecedor/${item.id}`);
  }

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }

  return (
    <div className={styles.solucoesRow}>
      <h2>{title}</h2>

      <div className={styles.solucoesRowLeft} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.solucoesRowRight} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className={styles.solucoesRowListArea}>
        <div
          className={styles.solucoesRowList}
          style={{ marginLeft: scrollX, width: items.length * 200 }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <div key={key} className={styles.solucoesRowItem}>
                <img
                  src={item.src}
                  alt={item.fornecedor}
                  onClick={() => handleClick(item)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SolucoesRow;

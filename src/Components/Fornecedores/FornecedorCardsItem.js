import React from 'react'
import Image from '../Helper/Image'
import styles from './FornecedorCardsItem.module.css'

const FornecedorCardsItem = ({card, setModalCard}) => {
  function handleClick(){
    setModalCard(card)
  }

  return (
    <li className={styles.card} onClick={handleClick}>
      <Image src={card.src} alt={card.title} />
      <span className={styles.span}>{card.title}</span>
    </li>
  )
}

export default FornecedorCardsItem

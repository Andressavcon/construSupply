import React from 'react'
import UserPost from './endpoints/UserPost'
import TokenPost from './endpoints/TokenPost'
import FornecedorPost from './endpoints/FornecedorPost'
import FornecedorGet from './endpoints/FornecedorGet'

const api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>TOKEN POST</h2>
      <TokenPost />
      <h2>FORNECEDOR POST</h2>
      <FornecedorPost />
      <h2>FORNECEDOR GET</h2>
      <FornecedorGet />
    </div>
  )
}

export default api
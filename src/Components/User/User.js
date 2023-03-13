import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'
import UserProfile from './UserProfile'
import UserFornecedorPost from './UserFornecedorPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'


const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes >
        <Route path='/' element={<UserProfile user={data.id} />} />
        <Route path='postar' element={<UserFornecedorPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
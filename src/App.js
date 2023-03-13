import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Fornecedores from './Components/Fornecedores/Fornecedores';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './UserContext';
import Card from './Components/Card/Card';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="fornecedores" element={<Fornecedores />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="fornecedor/:id" element={<Card />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;

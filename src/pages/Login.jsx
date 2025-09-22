// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css'; // Estilos para a página de login

const LoginPage = ({ champions }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    if (champions.length === 0) return;

    const timer = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % champions.length);
    }, 3000); // Altera a imagem a cada 3 segundos

    return () => clearInterval(timer);
  }, [champions]);

  const handleLogin = (e) => {
    e.preventDefault();
    const fakeUserData = { email: 'usuario@exemplo.com' };
    login(fakeUserData);
    navigate('/champions'); // Redireciona para a lista de campeões após o login
  };
  
  const backgroundUrl = champions.length > 0 
    ? `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[currentBgIndex].id}_0.jpg`
    : '';

  return (
    <div className="login-page">
      <div 
        key={backgroundUrl} 
        className="login-background" 
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <div className="login-overlay" />

      <div className="login-form-container">
        <h1>Bem-vindo ao Explorador de Campeões</h1>
        <p>Faça o login para continuar</p>
        <form onSubmit={handleLogin} className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
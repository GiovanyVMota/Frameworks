// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

// --- Styled Components ---
const ProfileContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 40px auto;
  padding: 40px;
  background-color: #1a1a1a;
  border-radius: 8px;
  color: #eee;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  position: relative;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
  background-color: #333;
  color: #f0e6d2;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #f0e6d2;
  font-size: 2.5em;
  margin-bottom: 30px;
`;

const InfoSection = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 1.1em;
    color: #ccc;
  }
  strong {
    color: #c8aa6e;
  }
`;

const PasswordSection = styled.div`
  margin-top: 30px;
  border-top: 1px solid #333;
  padding-top: 30px;

  h3 {
    color: #f0e6d2;
    margin-bottom: 15px;
  }
`;

const PasswordForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    flex-grow: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #444;
    background-color: #222;
    color: #eee;
    font-size: 1em;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
`;

const PrimaryButton = styled(Button)`
  background-color: #c8aa6e;
  color: #111;
  &:hover {
    background-color: #f0e6d2;
  }
`;

const LogoutButton = styled(Button)`
  width: 100%;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid #e63946;
  color: #e63946;

  &:hover {
    background-color: #e63946;
    color: #fff;
  }
`;


// --- Componente ---
const ProfilePage = () => {
  const { user, logout, updateUserPassword } = useAuth();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      setError("Erro ao fazer logout.");
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (newPassword.length < 6) {
      setError("A nova senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      await updateUserPassword(newPassword);
      setMessage("Senha alterada com sucesso!");
      setNewPassword('');
    } catch (err) {
      setError("Falha ao alterar a senha. Tente fazer o logout e login novamente.");
      console.error(err);
    }
  };

  return (
    <ProfileContainer>
      <BackButton to="/champions">← Voltar</BackButton>
      <Title>Perfil do Usuário</Title>

      <InfoSection>
        <p><strong>Email:</strong> {user?.email}</p>
      </InfoSection>

      <PasswordSection>
        <h3>Alterar Senha</h3>
        <PasswordForm onSubmit={handlePasswordUpdate}>
          <input 
            type="password"
            placeholder="Digite a nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <PrimaryButton type="submit">Salvar</PrimaryButton>
        </PasswordForm>
        {message && <p style={{ color: '#76c7c0', marginTop: '10px' }}>{message}</p>}
        {error && <p style={{ color: '#ff4d4f', marginTop: '10px' }}>{error}</p>}
      </PasswordSection>

      <LogoutButton onClick={handleLogout}>Sair (Logout)</LogoutButton>
    </ProfileContainer>
  );
};

export default ProfilePage;
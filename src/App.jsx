// src/App.jsx

import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ChampionCard from './components/ChampionCard';
import ChampionDetails from './pages/ChampionDetails';
import LoginPage from './pages/Login'; // <- Importar LoginPage
import './App.css';
import { BackgroundContext } from './context/BackgroundContext';

// O componente HomePage foi movido para dentro de App.jsx para simplificar
const HomePage = ({ champions, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredChampions = champions.filter(champion => 
    champion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="header">
        <h1>Explorador de Campeões de LoL</h1>
      </header>
      <div className="search-container">
        <input 
          type="text"
          className="search-input"
          placeholder="Buscar por nome do campeão..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Carregando campeões...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {!loading && !error && (
        <div className="champions-grid">
          {filteredChampions.map(champion => (
            <Link to={`/champion/${champion.id}`} key={champion.id} className="champion-link">
              <ChampionCard champion={champion} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

function App() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { backgroundImage } = useContext(BackgroundContext);

  useEffect(() => {
    const apiVersion = '14.1.1';
    const apiUrl = `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/pt_BR/champion.json`;

    const fetchChampions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        const championsData = Object.values(response.data.data);
        setChampions(championsData);
        setError(null);
      } catch (err) {
        setError("Não foi possível carregar os campeões. Por favor, tente novamente mais tarde.");
        setChampions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  return (
    <>
      <div className="background-container" style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
      }}></div>
      
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LoginPage champions={champions} />} />
            <Route path="/champions" element={
              <HomePage 
                champions={champions} 
                loading={loading} 
                error={error} 
              />
            } />
            <Route path="/champion/:championId" element={<ChampionDetails />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
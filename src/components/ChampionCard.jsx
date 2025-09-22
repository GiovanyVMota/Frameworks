// src/components/ChampionCard.jsx

import React, { useContext } from 'react';
import { BackgroundContext } from '../context/BackgroundContext';
import './ChampionCard.css';

const ChampionCard = ({ champion }) => {
  const { changeBackground } = useContext(BackgroundContext);
  const apiVersion = '14.1.1';
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/champion/${champion.image.full}`;
  
  const backgroundImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  return (
    <div 
      className="champion-card"
      onMouseEnter={() => changeBackground(backgroundImageUrl)}
      onMouseLeave={() => changeBackground('')}
    >
      <img 
        src={imageUrl} 
        alt={champion.name} 
        className="champion-image"
      />
      <div className="champion-info">
        <h3 className="champion-name">{champion.name}</h3>
        <p className="champion-title">{champion.title}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
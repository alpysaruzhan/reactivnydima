import React from 'react';
import { useParams } from 'react-router-dom';

const GamePage = ({ gamesData }) => {
  const { id } = useParams();
  const gameId = parseInt(id, 10);
  const game = gamesData.find((game) => game.id === gameId);

  if (!game) {
    return <div>Игра не найдена</div>;
  }

  return (
    <div>
      <img src={game.bannerURL} alt={game.title} className="game-banner" />
      <h1>{game.title}</h1>
      
    </div>
  );
};

export default GamePage;
